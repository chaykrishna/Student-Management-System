const mongoose = require('mongoose');

// Assignment schema
const assignmentSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
