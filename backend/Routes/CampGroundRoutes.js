const {
  addCampground,
} = require('../controller/CampGroundController/add-campground');
const {
  allCampgrounds,
} = require('../controller/CampGroundController/all-campgrounds');
const {
  singleCampground,
} = require('../controller/CampGroundController/single-campground');
const { specificCamps } = require('../controller/CampGroundController/specific-campgrounds');
const router = require('express').Router();

router.post('/add-campground', addCampground);
router.get('/all-campgrounds', allCampgrounds);
router.get('/category/:category',specificCamps)
router.get('/:campId', singleCampground);

module.exports = router;
