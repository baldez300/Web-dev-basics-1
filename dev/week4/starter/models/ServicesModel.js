const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model('Service', userSchema);

module.exports = Service;