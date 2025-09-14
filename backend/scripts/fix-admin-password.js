#!/usr/bin/env node

require('dotenv').config();
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'portfolio_admin',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

async function fixAdminPassword() {
  const client = await pool.connect();
  
  try {
    console.log('🔐 Fixing admin password...');
    
    // Generate correct password hash for 'admin123'
    const password = 'admin123';
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    console.log('Generated password hash:', passwordHash);
    
    // Update or insert admin user
    const result = await client.query(`
      INSERT INTO users (email, password_hash, first_name, last_name, role, is_active)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (email) 
      DO UPDATE SET 
        password_hash = EXCLUDED.password_hash,
        is_active = EXCLUDED.is_active
      RETURNING id, email, first_name, last_name, role
    `, [
      'admin@company.com',
      passwordHash,
      'Admin',
      'User',
      'admin',
      true
    ]);
    
    console.log('✅ Admin user updated successfully!');
    console.log('User details:', result.rows[0]);
    console.log('');
    console.log('🎯 You can now login with:');
    console.log('   Email: admin@company.com');
    console.log('   Password: admin123');
    
  } catch (error) {
    console.error('❌ Failed to fix admin password:', error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

// Run if this script is executed directly
if (require.main === module) {
  fixAdminPassword();
}

module.exports = { fixAdminPassword };
