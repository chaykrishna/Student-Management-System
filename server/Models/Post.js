const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['attendance', 'handout', 'assignment', 'result'],
      required: true,
    },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    title: { type: String, required: false },
    content: { type: String, required: false },
    dueDate: { type: Date, required: false },
    score: { type: Number, required: false },
    status: { type: String, enum: ['present', 'absent', 'late'], required: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
