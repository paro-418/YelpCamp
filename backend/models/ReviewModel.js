const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  reviewerName: {
    type: String,
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
