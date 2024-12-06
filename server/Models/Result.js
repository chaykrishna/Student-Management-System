const mongoose = require('mongoose');

// Result schema
const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (student)
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
