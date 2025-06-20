// routes/restakers.js
const express = require('express');
const router = express.Router();
const Restaker = require('../models/Restaker');

// GET all restakers
// GET /restakers?status=active&sort=desc
router.get('/', async (req, res) => {
  try {
    const { status, sort } = req.query;

    // Build query object
    const query = {};
    if (status) query.restakeStatus = status;

    // Build sort option
    const sortOption = sort === 'desc' ? -1 : 1;

    const restakers = await Restaker.find(query).sort({ stakeAmount: sortOption });
    res.json(restakers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
