const Users = require('../../models/UserModel');
const { checkPassword } = require('../../Utils/Bcrypt/bcrypt');
const { generateToken } = require('../../Utils/JWT/JWT');

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // checking if required data present
    if (!username || !password) {
      return res.status(400).json({
        message: 'Insufficient data',
      });
    }

    // checking username exist or not
    const userExist = await Users.findOne({ username }).select('+password');
    if (!userExist) {
      return res.status(401).json({
        message: 'Wrong username or password',
      });
    }

    // checking password
    const correctPassword = await checkPassword(password, userExist.password);
    if (!correctPassword) {
      res.status(401).json({
        message: 'Incorrect username or password',
      });
    }

    // generating jwt token
    const token = generateToken({ id: userExist._id.toString() });
    res.status(200).json({
      message: 'Successfully logged in',
      loggedInUser: {
        username: userExist.username,
        userId: userExist._id,
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};
