const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

// In-memory storage for user data
const users = [];

// Endpoint for user registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  try {
    // Generate a salt with 10 rounds (you can adjust this number)
    const salt = await bcrypt.genSalt(10);
    
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log('Password:', password);
    // console.log('Salt:', salt);
    // console.log('Hashed Password:', hashedPassword);

    // Save the user data with the hashed password
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users', (req, res) => {
  const userInformation = users.map((user) => {
    return {
      username: user.username,
      password: user.password,
    };
  });

  res.status(200).json(userInformation);
});

// Endpoint for user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Cannot find user' });
  }

  try {
    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint for user deletion
app.delete('/users/:username', (req, res) => {
  const { username } = req.params;

  // Check if the user exists
  const userIndex = users.findIndex((user) => user.username === username);
  if (userIndex === -1) {
    return res.status(400).json({ message: 'Cannot find user' });
  }

  // Delete the user
  users.splice(userIndex, 1);

  res.status(200).json({ message: 'User deleted successfully' });
}); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
