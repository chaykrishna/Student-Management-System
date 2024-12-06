const express = require('express');
const connectDB = require('./db'); // Import the database connection

// Initialize express
const app = express();

// Connect to the database
connectDB();

// Your routes and middleware
app.use(express.json()); // To parse JSON bodies

// Routes import (example)
const authRoutes = require('./Routes/authRoutes');
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
