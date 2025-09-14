const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const { authenticate, authorize } = require('../middleware/auth');
const { query: dbQuery, dbOperations, logger } = require('../config/database');

const router = express.Router();

// Configure multer for avatar uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads/avatars');
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir);
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'avatar-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Default settings structure
const defaultSettings = {
  profile: {
    name: 'Admin User',
    email: 'admin@company.com',
    avatar: '',
    phone: '',
    role: 'admin'
  },
  application: {
    siteName: 'Company Portfolio',
    siteDescription: 'Professional software development services',
    contactEmail: 'contact@company.com',
    contactPhone: '+1 (555) 123-4567',
    theme: 'light',
    language: 'en',
    timezone: 'UTC'
  },
  security: {
    twoFactorEnabled: false,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    passwordExpiry: 90
  },
  notifications: {
    emailNotifications: true,
    pushNotifications: false,
    leadAlerts: true,
    analyticsReports: true,
    systemAlerts: true,
    leadThreshold: 10,
    revenueThreshold: 1000
  },
  system: {
    maintenanceMode: false,
    autoBackup: true,
    backupFrequency: 'daily',
    cacheEnabled: true,
    debugMode: false
  },
  integrations: {
    googleAnalytics: '',
    facebookPixel: '',
    mailchimp: '',
    stripe: '',
    webhookUrl: ''
  }
};

// GET /api/settings - Get all settings
router.get('/', authenticate, authorize(['admin']), async (req, res) => {
  try {
    // In a real app, this would fetch from database
    // For now, return default settings with user info
    const settings = { ...defaultSettings };
    
    // Get user profile from database
    const user = await dbOperations.findOne('users', { id: req.user.id });
    if (user) {
      settings.profile = {
        name: user.name || 'Admin User',
        email: user.email || 'admin@company.com',
        avatar: user.avatar || '',
        phone: user.phone || '',
        role: user.role || 'admin'
      };
    }

    res.json({
      success: true,
      data: settings
    });
  } catch (error) {
    logger.error('Get settings error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch settings'
    });
  }
});

// GET /api/settings/:section - Get specific settings section
router.get('/:section', authenticate, authorize(['admin']), async (req, res) => {
  try {
    const { section } = req.params;
    
    if (!defaultSettings[section]) {
      return res.status(404).json({
        success: false,
        message: 'Settings section not found'
      });
    }

    let sectionData = defaultSettings[section];
    
    // Get user profile for profile section
    if (section === 'profile') {
      const user = await dbOperations.findOne('users', { id: req.user.id });
      if (user) {
        sectionData = {
          name: user.name || 'Admin User',
          email: user.email || 'admin@company.com',
          avatar: user.avatar || '',
          phone: user.phone || '',
          role: user.role || 'admin'
        };
      }
    }

    res.json({
      success: true,
      data: sectionData
    });
  } catch (error) {
    logger.error('Get settings section error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch settings section'
    });
  }
});

// PUT /api/settings/:section - Update specific settings section
router.put('/:section', authenticate, authorize(['admin']), async (req, res) => {
  try {
    const { section } = req.params;
    const updateData = req.body;
    
    if (!defaultSettings[section]) {
      return res.status(404).json({
        success: false,
        message: 'Settings section not found'
      });
    }

    // Handle profile updates
    if (section === 'profile') {
      const allowedFields = ['name', 'email', 'phone', 'avatar'];
      const updateFields = {};
      
      allowedFields.forEach(field => {
        if (updateData[field] !== undefined) {
          updateFields[field] = updateData[field];
        }
      });

      if (Object.keys(updateFields).length > 0) {
        await dbOperations.update('users', req.user.id, updateFields);
      }
    }

    // In a real app, other sections would be saved to a settings table
    logger.info('Settings updated:', { section, userId: req.user.id });

    res.json({
      success: true,
      message: 'Settings updated successfully',
      data: updateData
    });
  } catch (error) {
    logger.error('Update settings error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update settings'
    });
  }
});

// POST /api/settings/avatar - Upload avatar
router.post('/avatar', authenticate, authorize(['admin']), upload.single('avatar'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const avatarUrl = `/uploads/avatars/${req.file.filename}`;
    
    // Update user avatar in database
    await dbOperations.update('users', req.user.id, { avatar: avatarUrl });

    res.json({
      success: true,
      message: 'Avatar uploaded successfully',
      data: { avatar: avatarUrl }
    });
  } catch (error) {
    logger.error('Avatar upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to upload avatar'
    });
  }
});

// POST /api/settings/password - Change password
router.post('/password', authenticate, authorize(['admin']), [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { currentPassword, newPassword } = req.body;
    
    // Get current user
    const user = await dbOperations.findOne('users', { id: req.user.id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    
    // Update password
    await dbOperations.update('users', req.user.id, { password: hashedPassword });

    logger.info('Password changed successfully', { userId: req.user.id });

    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    logger.error('Change password error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to change password'
    });
  }
});

// POST /api/settings/backup - Initiate database backup
router.post('/backup', authenticate, authorize(['admin']), async (req, res) => {
  try {
    // In a real app, this would initiate a database backup
    logger.info('Database backup initiated', { userId: req.user.id });
    
    res.json({
      success: true,
      message: 'Database backup initiated successfully'
    });
  } catch (error) {
    logger.error('Database backup error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to initiate database backup'
    });
  }
});

// POST /api/settings/cache/clear - Clear cache
router.post('/cache/clear', authenticate, authorize(['admin']), async (req, res) => {
  try {
    // In a real app, this would clear application cache
    logger.info('Cache cleared', { userId: req.user.id });
    
    res.json({
      success: true,
      message: 'Cache cleared successfully'
    });
  } catch (error) {
    logger.error('Clear cache error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to clear cache'
    });
  }
});

module.exports = router;
