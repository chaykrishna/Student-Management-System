const mongoose = require('mongoose');

// Attendance schema for students in a particular course
const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model (student)
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    required: true,
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
