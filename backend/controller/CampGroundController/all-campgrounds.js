const Camps = require('../../models/CampModel');

module.exports.allCampgrounds = async (req, res, next) => {
  try {
    const allCamps = await Camps.find();

    res.status(200).json({
      message: 'Successfully fetched all campgrounds',
      allCamps,
    });
  } catch (err) {
    next(err);
  }
};
