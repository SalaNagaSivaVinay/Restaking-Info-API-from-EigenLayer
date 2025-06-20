const mongoose = require('mongoose');

const validatorSchema = new mongoose.Schema({
  operatorId: { type: String, required: true },
  totalDelegatedStake: { type: Number, required: true },
  slashHistory: [{
    timestamp: Date,
    amount: Number,
    reason: String,
  }],
  status: { type: String, enum: ['active', 'jailed', 'slashed'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Validator', validatorSchema);
