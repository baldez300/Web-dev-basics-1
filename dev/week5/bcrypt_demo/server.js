﻿import bcrypt from 'bcrypt';

const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage for user data 
// const users = [];
const users = [
  {username: "sami",password: "Strong#Password#"},
  {username: "rami",password: "Strong#Password#"},
];

// Endpoint for user registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  try {
    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user data with the hashed password
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/users', (req, res) => {
    const userInformation = users.map((user) => {
      return { username: user.username, password: user.password };
    });
  
    res.status(200).json(userInformation);
});
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});