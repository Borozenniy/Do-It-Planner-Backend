const mongoose = require('mongoose');

const subgoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  phase: {
    type: String,
    enum: ['to do', 'in progress', 'done'],
    default: 'to do',
  },
  priority: {
    type: String,
    enum: ['no priority', 'low', 'medium', 'high'],
    default: 'no priority',
  },
  id: { type: Number, required: true, unique: true },
});

const goalSchema = new mongoose.Schema({
  name: { type: String },
  id: { type: Number, required: true, unique: true },
  progressbar: { type: Boolean, default: false, required: false },
  highPriority: { type: Boolean, default: false, required: false },
  mode: {
    type: String,
    enum: ['none', 'kanban', 'eisenhower'],
    default: 'none',
  },
  subgoals: [subgoalSchema],
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  goals: [goalSchema],
  //goals: [{ type: mongoose.Schema.ObjectId, ref: 'Goal' }],
  //goals: { default: [], type: Array, required: true },
  id: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);

//goals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Goals' }];
