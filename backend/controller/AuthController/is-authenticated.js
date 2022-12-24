const jwt = require('jsonwebtoken');
module.exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.send(401).json({
        message: 'Not authorized to visit this path',
      });
    }

    const isValid = jwt.verify(token, 'thisisyelpcampjwtsecretkey');
    if (!isValid) {
      res.status(401).json({
        message: 'Not authorized',
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};
