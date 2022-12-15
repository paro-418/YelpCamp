const Camps = require('../../models/CampModel');

module.exports.addCampground = async (req, res, next) => {
  try {
    const { campName, price, campImage, campDescription } = req.body;

    if (!campDescription || !price || !campImage || !campName) {
      return res.status(400).json({
        message: 'Insufficient Data',
      });
    }

    const createdCamp = await Camps.create({
      campDescription,
      campImage,
      campName,
      price,
    });

    res.status(200).json({
      message: 'CampGround created successfully',
      createdCamp,
    });
  } catch (err) {
    next(err);
  }
};
