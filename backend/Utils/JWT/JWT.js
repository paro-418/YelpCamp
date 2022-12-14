const jwt = require('jsonwebtoken');

module.exports.generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
};
