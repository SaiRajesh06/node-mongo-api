require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
