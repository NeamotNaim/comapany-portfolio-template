const express = require('express');
const { body, query, param, validationResult } = require('express-validator');
const { authenticate, authorize } = require('../middleware/auth');
const { dbOperations, query: dbQuery, logger } = require('../config/database');

const router = express.Router();

// Helper function to process service data for frontend
const processServiceData = (service) => {
  if (!service) return service;

  const processed = { ...service };

  // Convert JSONB back to arrays for frontend
  if (processed.features && typeof processed.features === 'string') {
    try {
      processed.features = JSON.parse(processed.features);
    } catch (e) {
      processed.features = [];
    }
  }

  if (processed.technologies && typeof processed.technologies === 'string') {
    try {
      processed.technologies = JSON.parse(processed.technologies);
    } catch (e) {
      processed.technologies = [];
    }
  }

  return processed;
};

// Validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array()
    });
  }
  next();
};

// Service validation rules
const serviceValidation = [
  body('title').trim().isLength({ min: 3, max: 200 }).withMessage('Title must be 3-200 characters'),
  body('short_description').optional().trim().isLength({ max: 500 }).withMessage('Short description max 500 characters'),
  body('full_description').optional().trim(),
  body('features').optional().isArray().withMessage('Features must be an array'),
  body('technologies').optional().isArray().withMessage('Technologies must be an array'),
  body('pricing_start').optional().isInt({ min: 0 }).withMessage('Pricing must be a positive integer'),
  body('timeline_min').optional().isInt({ min: 1 }).withMessage('Timeline min must be at least 1 week'),
  body('timeline_max').optional().isInt({ min: 1 }).withMessage('Timeline max must be at least 1 week'),
  body('status').optional().isIn(['active', 'draft', 'archived']).withMessage('Invalid status')
];

// GET /api/services - Get all services with filtering and pagination
router.get('/', authenticate, [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be 1-100'),
  query('category_id').optional().isInt().withMessage('Category ID must be an integer'),
  query('status').optional().isIn(['active', 'draft', 'archived']).withMessage('Invalid status'),
  query('search').optional().trim()
], handleValidationErrors, async (req, res) => {
  try {
    const { page = 1, limit = 10, category_id, status, search } = req.query;
    
    // Build filters
    const filters = {};
    if (category_id) filters.category_id = category_id;
    if (status) filters.status = status;
    
    // Handle search
    let searchQuery = '';
    let searchValues = [];
    if (search) {
      searchQuery = `AND (title ILIKE $${Object.keys(filters).length + 1} OR short_description ILIKE $${Object.keys(filters).length + 1})`;
      searchValues = [`%${search}%`];
    }
    
    // Get services with category information
    const query = `
      SELECT s.*, sc.name as category_name, sc.slug as category_slug
      FROM services s
      LEFT JOIN service_categories sc ON s.category_id = sc.id
      WHERE ($1::int IS NULL OR s.category_id = $1)
      AND ($2::text IS NULL OR s.status = $2)
      ${searchQuery}
      ORDER BY s.display_order ASC, s.created_at DESC
      LIMIT $${searchValues.length + 3} OFFSET $${searchValues.length + 4}
    `;
    
    const countQuery = `
      SELECT COUNT(*) 
      FROM services s
      WHERE ($1::int IS NULL OR s.category_id = $1)
      AND ($2::text IS NULL OR s.status = $2)
      ${searchQuery}
    `;
    
    const offset = (page - 1) * limit;
    const queryParams = [category_id || null, status || null, ...searchValues, limit, offset];
    const countParams = [category_id || null, status || null, ...searchValues];
    
    const [servicesResult, countResult] = await Promise.all([
      dbQuery(query, queryParams),
      dbQuery(countQuery, countParams)
    ]);
    
    const total = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(total / limit);
    
    res.json({
      success: true,
      data: servicesResult.rows.map(processServiceData),
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    logger.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services'
    });
  }
});

// GET /api/services/categories - Get all service categories
router.get('/categories', authenticate, async (req, res) => {
  try {
    const result = await dbQuery(`
      SELECT sc.*, COUNT(s.id) as service_count
      FROM service_categories sc
      LEFT JOIN services s ON sc.id = s.category_id AND s.status = 'active'
      WHERE sc.is_active = true
      GROUP BY sc.id
      ORDER BY sc.display_order ASC
    `);
    
    res.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    logger.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories'
    });
  }
});

// GET /api/services/:id - Get single service
router.get('/:id', authenticate, [
  param('id').isInt().withMessage('Service ID must be an integer')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await dbQuery(`
      SELECT s.*, sc.name as category_name, sc.slug as category_slug
      FROM services s
      LEFT JOIN service_categories sc ON s.category_id = sc.id
      WHERE s.id = $1
    `, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }
    
    res.json({
      success: true,
      data: processServiceData(result.rows[0])
    });
  } catch (error) {
    logger.error('Get service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service'
    });
  }
});

// POST /api/services - Create new service
router.post('/', authenticate, authorize(['admin', 'editor']), serviceValidation, handleValidationErrors, async (req, res) => {
  try {
    const serviceData = { ...req.body };

    // Generate slug from title if not provided
    if (!serviceData.slug) {
      serviceData.slug = serviceData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    // Ensure slug is unique
    const existingService = await dbOperations.findOne('services', { slug: serviceData.slug });
    if (existingService) {
      serviceData.slug = `${serviceData.slug}-${Date.now()}`;
    }

    // Convert arrays to JSONB format for PostgreSQL
    if (serviceData.features && Array.isArray(serviceData.features)) {
      serviceData.features = JSON.stringify(serviceData.features);
    }
    if (serviceData.technologies && Array.isArray(serviceData.technologies)) {
      serviceData.technologies = JSON.stringify(serviceData.technologies);
    }

    // Set default values (timestamps are handled automatically by dbOperations)
    serviceData.status = serviceData.status || 'draft';

    console.log('Creating service with processed data:', serviceData);

    const newService = await dbOperations.create('services', serviceData);
    
    logger.info('Service created', { serviceId: newService.id, userId: req.user.id });
    
    res.status(201).json({
      success: true,
      data: processServiceData(newService),
      message: 'Service created successfully'
    });
  } catch (error) {
    logger.error('Create service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create service'
    });
  }
});

// PUT /api/services/:id - Update service
router.put('/:id', authenticate, authorize(['admin', 'editor']), [
  param('id').isInt().withMessage('Service ID must be an integer'),
  ...serviceValidation
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Check if service exists
    const existingService = await dbOperations.findOne('services', { id });
    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Update slug if title changed
    if (updateData.title && updateData.title !== existingService.title) {
      const newSlug = updateData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // Check if new slug is unique
      const slugExists = await dbQuery(
        'SELECT id FROM services WHERE slug = $1 AND id != $2',
        [newSlug, id]
      );

      if (slugExists.rows.length === 0) {
        updateData.slug = newSlug;
      }
    }

    // Convert arrays to JSONB format for PostgreSQL
    if (updateData.features && Array.isArray(updateData.features)) {
      updateData.features = JSON.stringify(updateData.features);
    }
    if (updateData.technologies && Array.isArray(updateData.technologies)) {
      updateData.technologies = JSON.stringify(updateData.technologies);
    }

    // Remove updated_at from updateData since dbOperations.update handles it automatically
    delete updateData.updated_at;

    const updatedService = await dbOperations.update('services', id, updateData);
    
    logger.info('Service updated', { serviceId: id, userId: req.user.id });
    
    res.json({
      success: true,
      data: processServiceData(updatedService),
      message: 'Service updated successfully'
    });
  } catch (error) {
    logger.error('Update service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update service'
    });
  }
});

// DELETE /api/services/:id - Delete service
router.delete('/:id', authenticate, authorize(['admin']), [
  param('id').isInt().withMessage('Service ID must be an integer')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedService = await dbOperations.delete('services', id);
    
    if (!deletedService) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }
    
    logger.info('Service deleted', { serviceId: id, userId: req.user.id });
    
    res.json({
      success: true,
      message: 'Service deleted successfully'
    });
  } catch (error) {
    logger.error('Delete service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete service'
    });
  }
});

// GET /api/services/stats/summary - Get service statistics
router.get('/stats/summary', authenticate, async (req, res) => {
  try {
    const statsQuery = `
      SELECT 
        COUNT(*) as total_services,
        COUNT(CASE WHEN status = 'active' THEN 1 END) as active_services,
        COUNT(CASE WHEN status = 'draft' THEN 1 END) as draft_services,
        COUNT(CASE WHEN status = 'archived' THEN 1 END) as archived_services,
        COUNT(DISTINCT category_id) as total_categories
      FROM services
    `;
    
    const result = await dbQuery(statsQuery);
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    logger.error('Get service stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service statistics'
    });
  }
});

module.exports = router;
