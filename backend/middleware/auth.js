const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { dbOperations, logger } = require('../config/database');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

// Generate JWT token
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    firstName: user.first_name,
    lastName: user.last_name
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    issuer: 'portfolio-admin',
    audience: 'portfolio-admin-users'
  });
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET, {
      issuer: 'portfolio-admin',
      audience: 'portfolio-admin-users'
    });
  } catch (error) {
    logger.error('Token verification failed:', error.message);
    return null;
  }
};

// Hash password
const hashPassword = async (password) => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Compare password
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Authentication middleware
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }

    // Verify user still exists and is active
    const user = await dbOperations.findOne('users', { 
      id: decoded.id, 
      is_active: true 
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found or inactive'
      });
    }

    // Update last login
    await dbOperations.update('users', user.id, { 
      last_login: new Date() 
    });

    // Attach user to request
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.first_name,
      lastName: user.last_name
    };

    next();
  } catch (error) {
    logger.error('Authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'Authentication failed'
    });
  }
};

// Role-based authorization middleware
const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // If no roles specified, just check if authenticated
    if (roles.length === 0) {
      return next();
    }

    // Check if user has required role
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }

    next();
  };
};

// Login function
const login = async (email, password) => {
  try {
    // Find user by email
    const user = await dbOperations.findOne('users', { 
      email: email.toLowerCase(),
      is_active: true 
    });

    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }

    // Verify password
    const isValidPassword = await comparePassword(password, user.password_hash);
    
    if (!isValidPassword) {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }

    // Generate token
    const token = generateToken(user);

    // Update last login
    await dbOperations.update('users', user.id, { 
      last_login: new Date() 
    });

    return {
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          role: user.role
        }
      }
    };
  } catch (error) {
    logger.error('Login error:', error);
    return {
      success: false,
      message: 'Login failed'
    };
  }
};

// Register function
const register = async (userData) => {
  try {
    const { email, password, firstName, lastName, role = 'viewer' } = userData;

    // Check if user already exists
    const existingUser = await dbOperations.findOne('users', { 
      email: email.toLowerCase() 
    });

    if (existingUser) {
      return {
        success: false,
        message: 'User already exists'
      };
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const newUser = await dbOperations.create('users', {
      email: email.toLowerCase(),
      password_hash: passwordHash,
      first_name: firstName,
      last_name: lastName,
      role: role
    });

    // Generate token
    const token = generateToken(newUser);

    return {
      success: true,
      data: {
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          firstName: newUser.first_name,
          lastName: newUser.last_name,
          role: newUser.role
        }
      }
    };
  } catch (error) {
    logger.error('Registration error:', error);
    return {
      success: false,
      message: 'Registration failed'
    };
  }
};

// Password reset token generation
const generateResetToken = () => {
  return jwt.sign(
    { type: 'password_reset', timestamp: Date.now() },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
};

// Verify reset token
const verifyResetToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.type === 'password_reset' ? decoded : null;
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
  hashPassword,
  comparePassword,
  authenticate,
  authorize,
  login,
  register,
  generateResetToken,
  verifyResetToken
};
