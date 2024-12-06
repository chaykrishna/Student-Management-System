const jwt = require('jsonwebtoken');

// Middleware to verify if token is provided and valid
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

// Middleware to check if the user is a faculty member
const verifyFacultyRole = (req, res, next) => {
  if (req.user.role !== 'faculty') {
    return res.status(403).json({ error: 'Access denied. Faculty only.' });
  }
  next();
};

// Middleware to check if the user is a student
const verifyStudentRole = (req, res, next) => {
  if (req.user.role !== 'student') {
    return res.status(403).json({ error: 'Access denied. Students only.' });
  }
  next();
};

module.exports = { verifyToken, verifyFacultyRole, verifyStudentRole };
