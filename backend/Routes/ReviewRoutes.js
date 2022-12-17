const { postReview } = require('../controller/ReviewController/post-review');
const { getReview } = require('../controller/ReviewController/get-review');

const router = require('express').Router();

router.post('/post-review/:campId', postReview);
router.get('/get-reviews/:campId', getReview);

module.exports = router;
