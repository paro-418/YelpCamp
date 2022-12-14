const { login } = require('../controller/AuthController/login.js');
const { signup } = require('../controller/AuthController/signup.js');
const router = require('express').Router();

router.post('/signup', signup);
router.post('/login', login);
module.exports = router;
