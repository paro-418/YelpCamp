const {
  addCampground,
} = require('../controller/CampGroundController/add-campground');
const router = require('express').Router();

router.post('/add-campground', addCampground);

module.exports = router;
