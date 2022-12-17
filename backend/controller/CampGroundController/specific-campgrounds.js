const Camps = require('../../models/CampModel');

module.exports.specificCamps = async (req, res, next) => {
  try {
    const camps = await Camps.find({ category: req.params.category });
    res.status(200).json({
      message: 'specific category camp request received',
      camps,
    });
  } catch (err) {
    next(err);
  }
};
