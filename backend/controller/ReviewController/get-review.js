const Review = require('../../models/ReviewModel');

module.exports.getReview = async (req, res, next) => {
  try {
    const { campId } = req.params;
    const allReviews = await Review.find({
      reviewedCamp: campId,
    });
    res.status(200).json({
      message: 'All review request received',
      allReviews,
    });
  } catch (err) {
    next(err);
  }
};
