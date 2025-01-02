const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  goals: { default: [], type: Array, required: false },
  //goals: { type: object, required: false, uniquie: false },
  id: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);
