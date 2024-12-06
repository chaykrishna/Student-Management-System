const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Models/User'); // Assuming User model is in Models/User.js

const router = express.Router();

// Register route (POST)
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({ name, email, password: hashedPassword, role });

  // Save the user to the database
  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
});

// Login route (POST)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare the entered password with the stored hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

  // Send the token in the response
  res.status(200).json({ token });
});

// GET route to fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// DELETE route to delete all users
router.delete('/users', async (req, res) => {
  try {
    const deletedUsers = await User.deleteMany({}); // Deletes all users
    res.status(200).json({ msg: 'All users deleted successfully', count: deletedUsers.deletedCount });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

module.exports = router;
