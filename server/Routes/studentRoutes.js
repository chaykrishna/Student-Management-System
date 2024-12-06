const express = require('express');
const router = express.Router();
const { verifyToken } = require('../Middleware/authMiddleware'); // Import your JWT middleware

// Route: Get student attendance
// Only accessible by students who are logged in (JWT verified)
router.get('/attendance', verifyToken, async (req, res) => {
  try {
    // Logic to fetch attendance data for the student from the database
    const studentId = req.user.userId; // Assuming JWT contains userId

    // Example attendance data (replace with real database query)
    const attendanceData = [
      { date: '2024-12-06', status: 'Present' },
      { date: '2024-12-05', status: 'Absent' },
    ];

    // Send the attendance data as the response
    res.status(200).json({
      message: 'Attendance data fetched successfully',
      attendance: attendanceData,
    });
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ message: 'Error fetching attendance data' });
  }
});

// Route: Get student course handouts (replace with real data)
router.get('/course-handouts', verifyToken, async (req, res) => {
  try {
    // Example course handouts (replace with real database query)
    const handouts = [
      { title: 'Math Notes', file: 'math_notes.pdf' },
      { title: 'Science Notes', file: 'science_notes.pdf' },
    ];

    res.status(200).json({
      message: 'Course handouts fetched successfully',
      handouts: handouts,
    });
  } catch (error) {
    console.error('Error fetching course handouts:', error);
    res.status(500).json({ message: 'Error fetching course handouts' });
  }
});

// Route: Get student assignments (replace with real data)
router.get('/assignments', verifyToken, async (req, res) => {
  try {
    // Example assignments (replace with real database query)
    const assignments = [
      { title: 'Math Homework', dueDate: '2024-12-10' },
      { title: 'Science Project', dueDate: '2024-12-15' },
    ];

    res.status(200).json({
      message: 'Assignments fetched successfully',
      assignments: assignments,
    });
  } catch (error) {
    console.error('Error fetching assignments:', error);
    res.status(500).json({ message: 'Error fetching assignments' });
  }
});

// Route: Get student results (replace with real data)
router.get('/results', verifyToken, async (req, res) => {
  try {
    // Example results (replace with real database query)
    const results = [
      { subject: 'Math', grade: 'A' },
      { subject: 'Science', grade: 'B+' },
    ];

    res.status(200).json({
      message: 'Results fetched successfully',
      results: results,
    });
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ message: 'Error fetching results' });
  }
});

module.exports = router;
