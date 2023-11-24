// controller/protectedRoutes.js

const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token verification failed' });
    }

    req.user = decoded; // Attach the decoded user information to the request object
    next();
  });
}

module.exports = { verifyToken };
