const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

// GET /users/:id
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  console.log('📥 Incoming ID:', id); // Optional: helpful during debugging

  try {
    const user = await User.findById(id);
    console.log('🧾 User from DB:', user); // Optional: logs user object

    if (!user || user.age <= 21) {
      return res.status(404).json({ error: 'User not found or age <= 21' });
    }

    res.json(user);
  } catch (err) {
    console.error('❌ Error fetching user:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
