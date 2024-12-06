const mongoose = require('mongoose');

// MongoDB URI (adjust according to your MongoDB setup)
const mongoURI = 'mongodb+srv://user_chay:1234@cluster0.w5zzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Use your DB name here

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
