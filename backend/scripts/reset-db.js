#!/usr/bin/env node

require('dotenv').config();
const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'portfolio_admin',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

async function resetDatabase() {
  const client = await pool.connect();
  
  try {
    console.log('🗑️  Dropping all tables...');
    
    // Drop all tables in the correct order (respecting foreign key constraints)
    const dropQueries = [
      'DROP TABLE IF EXISTS lead_activities CASCADE;',
      'DROP TABLE IF EXISTS leads CASCADE;',
      'DROP TABLE IF EXISTS services CASCADE;',
      'DROP TABLE IF EXISTS service_categories CASCADE;',
      'DROP TABLE IF EXISTS blog_posts CASCADE;',
      'DROP TABLE IF EXISTS case_studies CASCADE;',
      'DROP TABLE IF EXISTS media_files CASCADE;',
      'DROP TABLE IF EXISTS analytics_events CASCADE;',
      'DROP TABLE IF EXISTS analytics_daily CASCADE;',
      'DROP TABLE IF EXISTS settings CASCADE;',
      'DROP TABLE IF EXISTS users CASCADE;'
    ];
    
    for (const query of dropQueries) {
      await client.query(query);
    }
    
    console.log('✅ All tables dropped successfully!');
    
  } catch (error) {
    console.error('❌ Reset failed:', error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

// Run reset if this script is executed directly
if (require.main === module) {
  resetDatabase().then(() => {
    console.log('🎉 Database reset completed!');
    console.log('Now run: npm run migrate');
  });
}

module.exports = { resetDatabase };
