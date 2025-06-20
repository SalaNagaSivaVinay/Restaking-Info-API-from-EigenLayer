const express = require('express');
const router = express.Router();
const Validator = require('../models/Validator');

// @route   GET /validators
// @desc    Get all validators with metadata
router.get('/', async (req, res) => {
  try {
    const validators = await Validator.find();
    res.json(validators);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
});

module.exports = router;
