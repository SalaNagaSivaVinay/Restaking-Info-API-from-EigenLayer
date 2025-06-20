const express = require('express');
const router = express.Router();

// Placeholder: returns mock reward info for given address
router.get('/:address', async (req, res) => {
  const { address } = req.params;

  try {
    // Later replace this with DB or subgraph reward lookup
    res.json({
      address,
      totalRewards: 4.27,
      breakdown: [
        { validator: "0x123...", reward: 2.1 },
        { validator: "0xabc...", reward: 2.17 }
      ],
      timestamps: [
        { date: "2025-06-18", amount: 1.2 },
        { date: "2025-06-20", amount: 3.07 }
      ]
    });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching reward info' });
  }
});

module.exports = router;
