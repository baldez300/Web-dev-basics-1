const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
    unique: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Tour = mongoose.model('Tour', userSchema);

module.exports = Tour;