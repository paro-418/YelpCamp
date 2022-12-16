const Reviews = require('../../models/ReviewModel');

module.exports.postReview = async (req, res, next) => {
  try {
    const { review, reviewerId, reviewedCamp, reviewerName } = req.body;

    if (!review || !reviewerId || !reviewerName || !reviewedCamp) {
      return res.status(400).json({
        message: 'Insufficient Data',
      });
    }

    const createdReview = await Reviews.create({
      review,
      reviewerId,
      reviewedCamp,
      reviewerName,
    });

    res.status(200).json({
      message: 'request to post review received',
      createdReview: {
        review: createdReview.review,
        reviewerName: createdReview.reviewerName,
        reviewerId: createdReview.reviewerId,
        reviewedCamp: createdReview.reviewedCamp,
        reviewId: createdReview._id.toString(),
      },
    });
  } catch (err) {
    next(err);
  }
};
