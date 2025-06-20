// models/Restaker.js
const mongoose = require('mongoose');

const RestakerSchema = new mongoose.Schema({
  name: String,
  stakeAmount: Number,
  operator: String,
  restakeStatus: String,
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Restaker', RestakerSchema);
