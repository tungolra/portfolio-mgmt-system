const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    // required: true
  },
  pages: [{
    type: String,
    // required: true
  }],
  summary: {
    type: String,
    required: true
  },
  responsibilities: [{
    type: String,
    // required: true
  }],
  repo: {
    type: String,
    // required: true
  },
  site: {
    type: String,
    // required: true
  },
  skills: [{
    type: String,
    // required: true
  }],
  type: {
    type: String,
    // required: true,
    default: 'project'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Project', projectSchema);
