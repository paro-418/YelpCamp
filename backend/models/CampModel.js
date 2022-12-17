const mongoose = require('mongoose');

const campSchema = mongoose.Schema(
  {
    campName: {
      type: String,
      required: true,
      min: 3,
    },

    price: {
      type: Number,
      required: true,
    },

    campImage: {
      type: String,
      required: true,
    },

    campDescription: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    createdBy: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model('Camps', campSchema);
