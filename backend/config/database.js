const { Pool } = require('pg');
const winston = require('winston');

// Configure logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Database configuration
const dbConfig = {
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'portfolio_admin',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

// Create connection pool
const pool = new Pool(dbConfig);

// Handle pool errors
pool.on('error', (err, client) => {
  logger.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Test database connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    logger.info('Database connected successfully');
    return true;
  } catch (err) {
    logger.error('Database connection failed:', err);
    return false;
  }
};

// Generic query function with error handling
const query = async (text, params) => {
  const start = Date.now();
  try {
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    logger.info('Executed query', { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    logger.error('Query error', { text, error: error.message });
    throw error;
  }
};

// Transaction wrapper
const transaction = async (callback) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

// Pagination helper
const paginate = (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  return {
    limit: parseInt(limit),
    offset: parseInt(offset)
  };
};

// Build WHERE clause from filters
const buildWhereClause = (filters) => {
  const conditions = [];
  const values = [];
  let paramCount = 1;

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        conditions.push(`${key} = ANY($${paramCount})`);
        values.push(value);
      } else if (typeof value === 'string' && value.includes('%')) {
        conditions.push(`${key} ILIKE $${paramCount}`);
        values.push(value);
      } else {
        conditions.push(`${key} = $${paramCount}`);
        values.push(value);
      }
      paramCount++;
    }
  });

  return {
    whereClause: conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '',
    values
  };
};

// Common database operations
const dbOperations = {
  // Find one record
  findOne: async (table, conditions) => {
    const { whereClause, values } = buildWhereClause(conditions);
    const result = await query(`SELECT * FROM ${table} ${whereClause} LIMIT 1`, values);
    return result.rows[0] || null;
  },

  // Find many records with pagination
  findMany: async (table, conditions = {}, options = {}) => {
    const { page = 1, limit = 10, orderBy = 'created_at', orderDirection = 'DESC' } = options;
    const { whereClause, values } = buildWhereClause(conditions);
    const { limit: paginationLimit, offset } = paginate(page, limit);

    const countQuery = `SELECT COUNT(*) FROM ${table} ${whereClause}`;
    const dataQuery = `SELECT * FROM ${table} ${whereClause} ORDER BY ${orderBy} ${orderDirection} LIMIT ${paginationLimit} OFFSET ${offset}`;

    const [countResult, dataResult] = await Promise.all([
      query(countQuery, values),
      query(dataQuery, values)
    ]);

    const total = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(total / paginationLimit);

    return {
      data: dataResult.rows,
      pagination: {
        page: parseInt(page),
        limit: paginationLimit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  },

  // Create record
  create: async (table, data) => {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');
    const columns = keys.join(', ');

    const result = await query(
      `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *`,
      values
    );
    return result.rows[0];
  },

  // Update record
  update: async (table, id, data) => {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

    const result = await query(
      `UPDATE ${table} SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $${keys.length + 1} RETURNING *`,
      [...values, id]
    );
    return result.rows[0];
  },

  // Delete record
  delete: async (table, id) => {
    const result = await query(`DELETE FROM ${table} WHERE id = $1 RETURNING *`, [id]);
    return result.rows[0];
  }
};

module.exports = {
  pool,
  query,
  transaction,
  testConnection,
  paginate,
  buildWhereClause,
  dbOperations,
  logger
};
