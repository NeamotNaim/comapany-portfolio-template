#!/usr/bin/env node

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'portfolio_admin',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

async function runMigration() {
  const client = await pool.connect();
  
  try {
    console.log('🚀 Starting database migration...');
    
    // Read the schema file
    const schemaPath = path.join(__dirname, '../database/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Execute the schema
    await client.query(schema);
    
    console.log('✅ Database schema created successfully!');
    
    // Insert sample data
    await insertSampleData(client);
    
    console.log('🎉 Migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

async function insertSampleData(client) {
  console.log('📝 Inserting sample data...');
  
  try {
    // Create default admin user if not exists
    const adminPassword = await bcrypt.hash('admin123', 12);
    await client.query(`
      INSERT INTO users (email, password_hash, first_name, last_name, role)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (email) DO NOTHING
    `, ['admin@company.com', adminPassword, 'Admin', 'User', 'admin']);
    
    // Insert service categories if not exist
    const categories = [
      {
        name: 'Custom Software Development',
        slug: 'custom-software',
        description: 'Enterprise-grade custom solutions',
        icon: '💻',
        gradient: 'from-violet-500 to-indigo-500',
        bg_gradient: 'from-violet-500/10 to-indigo-500/10',
        display_order: 1
      },
      {
        name: 'Web Development',
        slug: 'web-app',
        description: 'Modern web applications',
        icon: '🌐',
        gradient: 'from-blue-500 to-cyan-500',
        bg_gradient: 'from-blue-500/10 to-cyan-500/10',
        display_order: 2
      },
      {
        name: 'Mobile App Development',
        slug: 'mobile-app',
        description: 'Native and cross-platform apps',
        icon: '📱',
        gradient: 'from-green-500 to-emerald-500',
        bg_gradient: 'from-green-500/10 to-emerald-500/10',
        display_order: 3
      },
      {
        name: 'AI & Machine Learning',
        slug: 'ai-ml',
        description: 'Intelligent automation solutions',
        icon: '🤖',
        gradient: 'from-purple-500 to-pink-500',
        bg_gradient: 'from-purple-500/10 to-pink-500/10',
        display_order: 4
      },
      {
        name: 'Blockchain Solutions',
        slug: 'blockchain',
        description: 'Decentralized applications',
        icon: '⛓️',
        gradient: 'from-orange-500 to-red-500',
        bg_gradient: 'from-orange-500/10 to-red-500/10',
        display_order: 5
      },
      {
        name: 'Cloud Infrastructure',
        slug: 'cloud-devops',
        description: 'Scalable cloud solutions',
        icon: '☁️',
        gradient: 'from-teal-500 to-blue-500',
        bg_gradient: 'from-teal-500/10 to-blue-500/10',
        display_order: 6
      },
      {
        name: 'UI/UX Design',
        slug: 'ui-ux',
        description: 'Beautiful user experiences',
        icon: '🎨',
        gradient: 'from-pink-500 to-rose-500',
        bg_gradient: 'from-pink-500/10 to-rose-500/10',
        display_order: 7
      },
      {
        name: 'Cybersecurity & IT Consulting',
        slug: 'cybersecurity-it',
        description: 'Comprehensive security & IT solutions',
        icon: '🔒',
        gradient: 'from-red-500 to-orange-500',
        bg_gradient: 'from-red-500/10 to-orange-500/10',
        display_order: 8
      }
    ];
    
    for (const category of categories) {
      await client.query(`
        INSERT INTO service_categories (name, slug, description, icon, gradient, bg_gradient, display_order)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (slug) DO NOTHING
      `, [
        category.name,
        category.slug,
        category.description,
        category.icon,
        category.gradient,
        category.bg_gradient,
        category.display_order
      ]);
    }
    
    // Insert sample services for each category
    const sampleServices = [
      // AI & ML Services
      {
        category_id: 4,
        title: 'Machine Learning Models',
        slug: 'machine-learning-models',
        short_description: 'Custom ML models for predictive analytics and automation',
        features: JSON.stringify(['Predictive Analytics', 'Data Processing', 'Model Training', 'API Integration']),
        technologies: JSON.stringify(['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']),
        pricing_start: 1500000, // $15,000 in cents
        timeline_min: 8,
        timeline_max: 16,
        status: 'active'
      },
      {
        category_id: 4,
        title: 'Natural Language Processing',
        slug: 'natural-language-processing',
        short_description: 'Advanced NLP solutions for text analysis and understanding',
        features: JSON.stringify(['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbots']),
        technologies: JSON.stringify(['Python', 'NLTK', 'spaCy', 'Transformers']),
        pricing_start: 2000000, // $20,000 in cents
        timeline_min: 10,
        timeline_max: 20,
        status: 'active'
      },
      
      // Custom Software Services
      {
        category_id: 1,
        title: 'Enterprise Resource Planning (ERP)',
        slug: 'enterprise-resource-planning-erp',
        short_description: 'Comprehensive ERP systems for business management',
        features: JSON.stringify(['Financial Management', 'Inventory Control', 'HR Management', 'Reporting']),
        technologies: JSON.stringify(['Java', 'Spring Boot', 'PostgreSQL', 'React']),
        pricing_start: 5000000, // $50,000 in cents
        timeline_min: 16,
        timeline_max: 32,
        status: 'active'
      },
      
      // Web Development Services
      {
        category_id: 2,
        title: 'Single Page Applications',
        slug: 'single-page-applications',
        short_description: 'Modern SPAs with React, Vue, or Angular',
        features: JSON.stringify(['Responsive Design', 'API Integration', 'State Management', 'SEO Optimization']),
        technologies: JSON.stringify(['React', 'Vue.js', 'Angular', 'TypeScript']),
        pricing_start: 1200000, // $12,000 in cents
        timeline_min: 6,
        timeline_max: 12,
        status: 'active'
      },
      
      // Mobile Development Services
      {
        category_id: 3,
        title: 'iOS Applications',
        slug: 'ios-applications',
        short_description: 'Native iOS apps with Swift and modern frameworks',
        features: JSON.stringify(['Native Performance', 'App Store Optimization', 'Push Notifications', 'In-App Purchases']),
        technologies: JSON.stringify(['Swift', 'SwiftUI', 'Core Data', 'CloudKit']),
        pricing_start: 1800000, // $18,000 in cents
        timeline_min: 8,
        timeline_max: 16,
        status: 'active'
      }
    ];
    
    for (const service of sampleServices) {
      // Check if service already exists
      const existingService = await client.query(
        'SELECT id FROM services WHERE slug = $1',
        [service.slug]
      );

      if (existingService.rows.length === 0) {
        await client.query(`
          INSERT INTO services (category_id, title, slug, short_description, features, technologies, pricing_start, timeline_min, timeline_max, status)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `, [
          service.category_id,
          service.title,
          service.slug,
          service.short_description,
          service.features,
          service.technologies,
          service.pricing_start,
          service.timeline_min,
          service.timeline_max,
          service.status
        ]);
      }
    }
    
    // Insert sample leads
    const sampleLeads = [
      {
        name: 'John Smith',
        email: 'john.smith@techcorp.com',
        company: 'TechCorp Inc.',
        service_interest: 'AI & Machine Learning',
        message: 'We need a custom ML model for predictive analytics in our e-commerce platform.',
        status: 'new',
        priority: 'high'
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah@startup.io',
        company: 'Startup.io',
        service_interest: 'Custom Software Development',
        message: 'Looking for a comprehensive ERP system for our growing business.',
        status: 'contacted',
        priority: 'medium'
      },
      {
        name: 'Michael Chen',
        email: 'mchen@healthtech.com',
        company: 'HealthTech Solutions',
        service_interest: 'Cybersecurity & IT Consulting',
        message: 'Need HIPAA compliance assessment and security audit for our healthcare platform.',
        status: 'qualified',
        priority: 'high'
      }
    ];
    
    for (const lead of sampleLeads) {
      // Check if lead already exists
      const existingLead = await client.query(
        'SELECT id FROM leads WHERE email = $1',
        [lead.email]
      );

      if (existingLead.rows.length === 0) {
        await client.query(`
          INSERT INTO leads (name, email, company, service_interest, message, status, priority)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `, [
          lead.name,
          lead.email,
          lead.company,
          lead.service_interest,
          lead.message,
          lead.status,
          lead.priority
        ]);
      }
    }
    
    // Insert default settings
    const settings = [
      { key: 'site_name', value: 'Portfolio Company', description: 'Website name', type: 'string', is_public: true },
      { key: 'site_description', value: 'Professional technology consulting services', description: 'Website description', type: 'string', is_public: true },
      { key: 'contact_email', value: 'contact@company.com', description: 'Main contact email', type: 'string', is_public: true },
      { key: 'contact_phone', value: '+1 (555) 123-4567', description: 'Main contact phone', type: 'string', is_public: true },
      { key: 'analytics_enabled', value: 'true', description: 'Enable analytics tracking', type: 'boolean', is_public: false },
      { key: 'lead_notification_email', value: 'admin@company.com', description: 'Email for lead notifications', type: 'string', is_public: false }
    ];
    
    for (const setting of settings) {
      await client.query(`
        INSERT INTO settings (key, value, description, type, is_public)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (key) DO NOTHING
      `, [setting.key, setting.value, setting.description, setting.type, setting.is_public]);
    }
    
    console.log('✅ Sample data inserted successfully!');
    
  } catch (error) {
    console.error('❌ Failed to insert sample data:', error);
    throw error;
  }
}

// Run migration if this script is executed directly
if (require.main === module) {
  runMigration();
}

module.exports = { runMigration };
