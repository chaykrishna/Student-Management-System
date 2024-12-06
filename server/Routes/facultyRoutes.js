const express = require('express');
const router = express.Router();
const Post = require('../Models/Post'); // Assuming you've created a Post model for the content

// Middleware to check if the user is a faculty
const { verifyToken, verifyFacultyRole } = require('../Middleware/authMiddleware');

// POST: Faculty can create attendance
router.post('/attendance', verifyToken, verifyFacultyRole, async (req, res) => {
  try {
    const { studentId, status } = req.body;
    const newPost = new Post({
      type: 'attendance',
      studentId,
      status,
      createdAt: new Date(),
    });

    await newPost.save();
    res.status(201).json({ message: 'Attendance posted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// POST: Faculty can create handouts
router.post('/handouts', verifyToken, verifyFacultyRole, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({
      type: 'handout',
      title,
      content,
      createdAt: new Date(),
    });

    await newPost.save();
    res.status(201).json({ message: 'Handout posted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// POST: Faculty can create assignments
router.post('/assignments', verifyToken, verifyFacultyRole, async (req, res) => {
  try {
    const { title, dueDate } = req.body;
    const newPost = new Post({
      type: 'assignment',
      title,
      dueDate,
      createdAt: new Date(),
    });

    await newPost.save();
    res.status(201).json({ message: 'Assignment posted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// POST: Faculty can create results
router.post('/results', verifyToken, verifyFacultyRole, async (req, res) => {
  try {
    const { studentId, score } = req.body;
    const newPost = new Post({
      type: 'result',
      studentId,
      score,
      createdAt: new Date(),
    });

    await newPost.save();
    res.status(201).json({ message: 'Result posted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
