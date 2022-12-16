const { postReview } = require('../controller/ReviewController/post-review');

const router = require('express').Router();

router.post('/:campId', postReview);

module.exports = router;
