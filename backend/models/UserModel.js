const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  rawPassword: {
    type: String,
  },
});

module.exports = mongoose.model('Users', userSchema);
