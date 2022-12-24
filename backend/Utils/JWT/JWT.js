const jwt = require('jsonwebtoken');

module.exports.generateToken = (payload) => {
  return jwt.sign(payload, 'thisisyelpcampjwtsecretkey', {
    expiresIn: '60s',
  });
};
