const Camps = require('../../models/ReviewModel');

module.exports.postReview = async (req, res, next) => {
  try {
    console.log(req.params);
    res.status(200).json({
      message: 'request to post review received',
    });
  } catch (err) {
    next(err);
  }
};
