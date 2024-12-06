const Post = require('../Models/Post');

// Post attendance
const postAttendance = async (req, res) => {
  try {
    const { attendanceData } = req.body; // Array of attendance records
    const attendancePost = new Post({ type: 'attendance', content: attendanceData, createdBy: req.user.id });
    await attendancePost.save();
    res.status(201).json({ message: 'Attendance posted successfully', attendancePost });
  } catch (err) {
    res.status(500).json({ error: 'Failed to post attendance' });
  }
};

// Post course handouts
const postHandout = async (req, res) => {
  try {
    const { handout } = req.body;
    const handoutPost = new Post({ type: 'handout', content: handout, createdBy: req.user.id });
    await handoutPost.save();
    res.status(201).json({ message: 'Handout posted successfully', handoutPost });
  } catch (err) {
    res.status(500).json({ error: 'Failed to post handout' });
  }
};

// Post assignments
const postAssignment = async (req, res) => {
  try {
    const { assignment } = req.body;
    const assignmentPost = new Post({ type: 'assignment', content: assignment, createdBy: req.user.id });
    await assignmentPost.save();
    res.status(201).json({ message: 'Assignment posted successfully', assignmentPost });
  } catch (err) {
    res.status(500).json({ error: 'Failed to post assignment' });
  }
};

// Post results
const postResult = async (req, res) => {
  try {
    const { result } = req.body;
    const resultPost = new Post({ type: 'result', content: result, createdBy: req.user.id });
    await resultPost.save();
    res.status(201).json({ message: 'Result posted successfully', resultPost });
  } catch (err) {
    res.status(500).json({ error: 'Failed to post result' });
  }
};

module.exports = { postAttendance, postHandout, postAssignment, postResult };
