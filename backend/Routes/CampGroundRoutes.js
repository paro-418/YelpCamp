const {
  addCampground,
} = require('../controller/CampGroundController/add-campground');
const {
  allCampgrounds,
} = require('../controller/CampGroundController/all-campgrounds');
const router = require('express').Router();

router.post('/add-campground', addCampground);
router.get('/all-campgrounds', allCampgrounds);

module.exports = router;
