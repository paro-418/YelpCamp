const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  reviewBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  reviewedCamp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camps',
    required: true,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model('Reviews', reviewSchema);
