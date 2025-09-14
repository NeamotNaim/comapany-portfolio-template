const express = require('express');
const { body, query, param, validationResult } = require('express-validator');
const { authenticate, authorize } = require('../middleware/auth');
const { dbOperations, query: dbQuery, transaction, logger } = require('../config/database');

const router = express.Router();

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

// Lead validation rules for creating new leads
const leadValidation = [
  body('name').trim().isLength({ min: 2, max: 200 }).withMessage('Name must be 2-200 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').optional().trim().isLength({ max: 50 }).withMessage('Phone max 50 characters'),
  body('company').optional().trim().isLength({ max: 200 }).withMessage('Company max 200 characters'),
  body('service_interest').optional().trim().isLength({ max: 200 }).withMessage('Service interest max 200 characters'),
  body('budget_range').optional().trim().isLength({ max: 50 }).withMessage('Budget range max 50 characters'),
  body('timeline').optional().trim().isLength({ max: 50 }).withMessage('Timeline max 50 characters'),
  body('message').optional().trim().isLength({ max: 2000 }).withMessage('Message max 2000 characters'),
  body('status').optional().isIn(['new', 'contacted', 'qualified', 'proposal_sent', 'converted', 'closed', 'lost']).withMessage('Invalid status'),
  body('priority').optional().isIn(['low', 'medium', 'high']).withMessage('Invalid priority')
];

// Lead validation rules for updating existing leads (all fields optional)
const leadUpdateValidation = [
  body('name').optional().trim().isLength({ min: 2, max: 200 }).withMessage('Name must be 2-200 characters'),
  body('email').optional().isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').optional().trim().isLength({ max: 50 }).withMessage('Phone max 50 characters'),
  body('company').optional().trim().isLength({ max: 200 }).withMessage('Company max 200 characters'),
  body('service_interest').optional().trim().isLength({ max: 200 }).withMessage('Service interest max 200 characters'),
  body('budget_range').optional().trim().isLength({ max: 50 }).withMessage('Budget range max 50 characters'),
  body('timeline').optional().trim().isLength({ max: 50 }).withMessage('Timeline max 50 characters'),
  body('message').optional().trim().isLength({ max: 2000 }).withMessage('Message max 2000 characters'),
  body('status').optional().isIn(['new', 'contacted', 'qualified', 'proposal_sent', 'converted', 'closed', 'lost']).withMessage('Invalid status'),
  body('priority').optional().isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
  body('conversion_value').optional().isInt({ min: 0 }).withMessage('Conversion value must be a positive integer'),
  body('notes').optional().trim().isLength({ max: 2000 }).withMessage('Notes max 2000 characters')
];

// GET /api/leads - Get all leads with filtering and pagination
router.get('/', authenticate, [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be 1-100'),
  query('status').optional().isIn(['new', 'contacted', 'qualified', 'proposal_sent', 'converted', 'closed', 'lost']).withMessage('Invalid status'),
  query('priority').optional().isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
  query('assigned_to').optional().isInt().withMessage('Assigned to must be an integer'),
  query('search').optional().trim(),
  query('date_from').optional().isISO8601().withMessage('Invalid date format'),
  query('date_to').optional().isISO8601().withMessage('Invalid date format')
], handleValidationErrors, async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      status, 
      priority, 
      assigned_to, 
      search, 
      date_from, 
      date_to 
    } = req.query;
    
    // Build WHERE conditions
    const conditions = [];
    const values = [];
    let paramCount = 1;
    
    if (status) {
      conditions.push(`l.status = $${paramCount}`);
      values.push(status);
      paramCount++;
    }
    
    if (priority) {
      conditions.push(`l.priority = $${paramCount}`);
      values.push(priority);
      paramCount++;
    }
    
    if (assigned_to) {
      conditions.push(`l.assigned_to = $${paramCount}`);
      values.push(assigned_to);
      paramCount++;
    }
    
    if (search) {
      conditions.push(`(l.name ILIKE $${paramCount} OR l.email ILIKE $${paramCount} OR l.company ILIKE $${paramCount})`);
      values.push(`%${search}%`);
      paramCount++;
    }
    
    if (date_from) {
      conditions.push(`l.created_at >= $${paramCount}`);
      values.push(date_from);
      paramCount++;
    }
    
    if (date_to) {
      conditions.push(`l.created_at <= $${paramCount}`);
      values.push(date_to);
      paramCount++;
    }
    
    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
    const offset = (page - 1) * limit;
    
    // Get leads with assigned user information
    const leadsQuery = `
      SELECT 
        l.*,
        u.first_name as assigned_first_name,
        u.last_name as assigned_last_name,
        u.email as assigned_email
      FROM leads l
      LEFT JOIN users u ON l.assigned_to = u.id
      ${whereClause}
      ORDER BY l.created_at DESC
      LIMIT $${paramCount} OFFSET $${paramCount + 1}
    `;
    
    const countQuery = `
      SELECT COUNT(*) 
      FROM leads l
      ${whereClause}
    `;
    
    const [leadsResult, countResult] = await Promise.all([
      dbQuery(leadsQuery, [...values, limit, offset]),
      dbQuery(countQuery, values)
    ]);
    
    const total = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(total / limit);
    
    res.json({
      success: true,
      data: leadsResult.rows,
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
    logger.error('Get leads error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leads'
    });
  }
});

// GET /api/leads/stats - Get lead statistics
router.get('/stats', authenticate, async (req, res) => {
  try {
    const statsQuery = `
      SELECT 
        COUNT(*) as total_leads,
        COUNT(CASE WHEN status = 'new' THEN 1 END) as new_leads,
        COUNT(CASE WHEN status IN ('contacted', 'qualified', 'proposal_sent') THEN 1 END) as in_progress_leads,
        COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_leads,
        COUNT(CASE WHEN status IN ('closed', 'lost') THEN 1 END) as closed_leads,
        ROUND(
          (COUNT(CASE WHEN status = 'converted' THEN 1 END)::decimal / 
           NULLIF(COUNT(CASE WHEN status != 'new' THEN 1 END), 0)) * 100, 2
        ) as conversion_rate,
        SUM(CASE WHEN status = 'converted' THEN conversion_value ELSE 0 END) as total_revenue
      FROM leads
      WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
    `;
    
    const result = await dbQuery(statsQuery);
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    logger.error('Get lead stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch lead statistics'
    });
  }
});

// GET /api/leads/:id - Get single lead with activities
router.get('/:id', authenticate, [
  param('id').isInt().withMessage('Lead ID must be an integer')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get lead with assigned user info
    const leadQuery = `
      SELECT 
        l.*,
        u.first_name as assigned_first_name,
        u.last_name as assigned_last_name,
        u.email as assigned_email
      FROM leads l
      LEFT JOIN users u ON l.assigned_to = u.id
      WHERE l.id = $1
    `;
    
    // Get lead activities
    const activitiesQuery = `
      SELECT 
        la.*,
        u.first_name,
        u.last_name
      FROM lead_activities la
      LEFT JOIN users u ON la.user_id = u.id
      WHERE la.lead_id = $1
      ORDER BY la.created_at DESC
    `;
    
    const [leadResult, activitiesResult] = await Promise.all([
      dbQuery(leadQuery, [id]),
      dbQuery(activitiesQuery, [id])
    ]);
    
    if (leadResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }
    
    const lead = leadResult.rows[0];
    lead.activities = activitiesResult.rows;
    
    res.json({
      success: true,
      data: lead
    });
  } catch (error) {
    logger.error('Get lead error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch lead'
    });
  }
});

// POST /api/leads - Create new lead (public endpoint for contact form)
router.post('/', [
  body('name').trim().isLength({ min: 2, max: 200 }).withMessage('Name must be 2-200 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').optional().trim().isLength({ max: 50 }).withMessage('Phone max 50 characters'),
  body('company').optional().trim().isLength({ max: 200 }).withMessage('Company max 200 characters'),
  body('service_interest').optional().trim().isLength({ max: 200 }).withMessage('Service interest max 200 characters'),
  body('budget_range').optional().trim().isLength({ max: 50 }).withMessage('Budget range max 50 characters'),
  body('timeline').optional().trim().isLength({ max: 50 }).withMessage('Timeline max 50 characters'),
  body('message').optional().trim().isLength({ max: 2000 }).withMessage('Message max 2000 characters')
], handleValidationErrors, async (req, res) => {
  try {
    const leadData = {
      ...req.body,
      status: 'new',
      priority: 'medium',
      source: 'website'
    };
    
    const newLead = await transaction(async (client) => {
      // Create lead
      const lead = await dbOperations.create('leads', leadData);
      
      // Create initial activity
      await dbOperations.create('lead_activities', {
        lead_id: lead.id,
        activity_type: 'lead_created',
        description: 'Lead created from website contact form',
        metadata: { source: 'website' }
      });
      
      return lead;
    });
    
    logger.info('New lead created', { leadId: newLead.id, email: newLead.email });
    
    // TODO: Send notification email to admin
    
    res.status(201).json({
      success: true,
      data: newLead,
      message: 'Thank you for your inquiry. We will contact you soon!'
    });
  } catch (error) {
    logger.error('Create lead error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again.'
    });
  }
});

// PUT /api/leads/:id - Update lead
router.put('/:id', authenticate, authorize(['admin', 'editor']), [
  param('id').isInt().withMessage('Lead ID must be an integer'),
  ...leadUpdateValidation
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const result = await transaction(async (client) => {
      // Get current lead
      const currentLead = await dbOperations.findOne('leads', { id });
      if (!currentLead) {
        throw new Error('Lead not found');
      }
      
      // Update lead
      const updatedLead = await dbOperations.update('leads', id, updateData);
      
      // Track status change
      if (updateData.status && updateData.status !== currentLead.status) {
        await dbOperations.create('lead_activities', {
          lead_id: id,
          user_id: req.user.id,
          activity_type: 'status_change',
          description: `Status changed from ${currentLead.status} to ${updateData.status}`,
          metadata: { 
            old_status: currentLead.status, 
            new_status: updateData.status 
          }
        });
      }
      
      return updatedLead;
    });
    
    logger.info('Lead updated', { leadId: id, userId: req.user.id });
    
    res.json({
      success: true,
      data: result,
      message: 'Lead updated successfully'
    });
  } catch (error) {
    logger.error('Update lead error:', error);
    res.status(500).json({
      success: false,
      message: error.message === 'Lead not found' ? 'Lead not found' : 'Failed to update lead'
    });
  }
});

// PATCH /api/leads/:id/status - Update lead status only
router.patch('/:id/status', authenticate, authorize(['admin', 'editor']), [
  param('id').isInt().withMessage('Lead ID must be an integer'),
  body('status').isIn(['new', 'contacted', 'qualified', 'proposal_sent', 'converted', 'closed', 'lost']).withMessage('Invalid status')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await transaction(async (client) => {
      // Get current lead
      const currentLead = await dbOperations.findOne('leads', { id });
      if (!currentLead) {
        throw new Error('Lead not found');
      }

      // Update only the status
      const updatedLead = await dbOperations.update('leads', id, { status });

      // Track status change
      await dbOperations.create('lead_activities', {
        lead_id: id,
        user_id: req.user.id,
        activity_type: 'status_change',
        description: `Status changed from ${currentLead.status} to ${status}`,
        metadata: {
          old_status: currentLead.status,
          new_status: status
        }
      });

      return updatedLead;
    });

    logger.info('Lead status updated', { leadId: id, newStatus: status, userId: req.user.id });

    res.json({
      success: true,
      data: result,
      message: 'Lead status updated successfully'
    });
  } catch (error) {
    logger.error('Update lead status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update lead status'
    });
  }
});

// POST /api/leads/:id/activities - Add activity to lead
router.post('/:id/activities', authenticate, [
  param('id').isInt().withMessage('Lead ID must be an integer'),
  body('activity_type').trim().isLength({ min: 1, max: 50 }).withMessage('Activity type is required'),
  body('description').trim().isLength({ min: 1, max: 1000 }).withMessage('Description is required'),
  body('metadata').optional().isObject().withMessage('Metadata must be an object')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    const { activity_type, description, metadata } = req.body;
    
    // Verify lead exists
    const lead = await dbOperations.findOne('leads', { id });
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }
    
    const activity = await dbOperations.create('lead_activities', {
      lead_id: id,
      user_id: req.user.id,
      activity_type,
      description,
      metadata: metadata || {}
    });
    
    logger.info('Lead activity added', { leadId: id, activityId: activity.id, userId: req.user.id });
    
    res.status(201).json({
      success: true,
      data: activity,
      message: 'Activity added successfully'
    });
  } catch (error) {
    logger.error('Add lead activity error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add activity'
    });
  }
});

// DELETE /api/leads/:id - Delete lead
router.delete('/:id', authenticate, authorize(['admin']), [
  param('id').isInt().withMessage('Lead ID must be an integer')
], handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedLead = await dbOperations.delete('leads', id);
    
    if (!deletedLead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }
    
    logger.info('Lead deleted', { leadId: id, userId: req.user.id });
    
    res.json({
      success: true,
      message: 'Lead deleted successfully'
    });
  } catch (error) {
    logger.error('Delete lead error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete lead'
    });
  }
});

module.exports = router;
