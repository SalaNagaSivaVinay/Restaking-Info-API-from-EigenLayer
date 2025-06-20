const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Import routes
const restakerRoutes = require('./routes/restakers');
const validatorRoutes = require('./routes/validators');
const rewardRoutes = require('./routes/rewards');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Use routes
app.use('/restakers', restakerRoutes);
app.use('/validators', validatorRoutes);
app.use('/rewards', rewardRoutes);

// Connect DB and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' MongoDB connected');
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
})
.catch((err) => console.error(' MongoDB connection error:', err));
