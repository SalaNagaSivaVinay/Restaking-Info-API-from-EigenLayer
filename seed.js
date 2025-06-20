// seed.js
const mongoose = require('mongoose');
require('dotenv').config();
const Restaker = require('./models/Restaker');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('🌱 Seeding MongoDB...');

    await Restaker.deleteMany();

    await Restaker.insertMany([
      { name: 'Vinay', stakeAmount: 5000, operator: 'EigenNode-Alpha', restakeStatus: 'active' },
      { name: 'Madhu', stakeAmount: 3000, operator: 'EigenNode-Beta', restakeStatus: 'inactive' },
      { name: 'Azzes', stakeAmount: 8000, operator: 'EigenNode-Gamma', restakeStatus: 'active' }
    ]);

    console.log('✅ Mock restakers seeded');
    process.exit();
  })
  .catch((err) => console.error('❌ Seed error:', err));
