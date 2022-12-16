const Camps = require('../../models/CampModel');

module.exports.singleCampground = async (req, res, next) => {
  const { campId } = req.params;
  const camp = await Camps.findById({ _id: campId });
  if (!camp) {
    return res.status(400).json({
      message: 'No campground with this id exists',
    });
  }
  res.status(200).json({
    message: 'req for single campground received',
    camp: {
      campName: camp.campName,
      campImage: camp.campImage,
      price: camp.price,
      campDescription: camp.campDescription,
      id: camp._id.toString(),
      createdBy: camp.createdBy,
    },
  });
};
