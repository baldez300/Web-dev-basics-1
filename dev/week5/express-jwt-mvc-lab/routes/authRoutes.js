// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const AuthProtectedRoute = require('../controllers/protectedRoutes');

router.post('/login', AuthController.login);

// Protected route
router.get('/protected', AuthProtectedRoute.verifyToken, (req, res) => {
  res.json({ message: 'You have access to the protected route', user: req.user });
});

module.exports = router;
