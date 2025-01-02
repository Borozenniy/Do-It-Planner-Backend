const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  name: { type: String },
  progressbar: { type: Boolean, default: false },
});

const goalsSchema = new mongoose.Schema({
  goals: [goalSchema],
});

module.exports = mongoose.model('Goals', goalsSchema);
