const { signup } = require('../controller/AuthController/signup.js');
const router = require('express').Router();

router.post('/signup', signup);
module.exports = router;
