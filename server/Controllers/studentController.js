const Post = require('../Models/Post');

// Get attendance
const getAttendance = async (req, res) => {
  try {
    const attendance = await Post.find({ type: 'attendance' });
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch attendance' });
  }
};

// Get handouts
const getHandouts = async (req, res) => {
  try {
    const handouts = await Post.find({ type: 'handout' });
    res.json(handouts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch handouts' });
  }
};

// Get assignments
const getAssignments = async (req, res) => {
  try {
    const assignments = await Post.find({ type: 'assignment' });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assignments' });
  }
};

// Get results
const getResults = async (req, res) => {
  try {
    const results = await Post.find({ type: 'result' });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch results' });
  }
};

module.exports = { getAttendance, getHandouts, getAssignments, getResults };
