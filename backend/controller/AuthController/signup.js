const Users = require('../../models/UserModel');
const { generateToken } = require('../../Utils/JWT/JWT');
const { hashPassword } = require('../../Utils/Bcrypt/bcrypt');

module.exports.signup = async (req, res, next) => {
  try {
    // console.log(`BODY`, req.body);
    const { username, password } = req.body;

    // checking if both required data is available or not
    if (!username || !password) {
      return res.status(400).json({
        message: 'insufficient data',
      });
    }

    // checking if username already exist in database
    const checkUserExist = await Users.findOne({ username });
    if (checkUserExist) {
      return res.status(409).json({
        message: `This username isn't available`,
      });
    }

    // hashing password
    const hashedPassword = await hashPassword(password);

    // storing userinfo in database

    const user = await Users.create({
      username,
      password: hashedPassword,
      rawPassword: password,
    });

    // generating token
    const token = generateToken({ id: user._id });

    res.status(201).json({
      message: 'User successfully created!',
      createdUser: {
        username: user.username,
        id: user._id,
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};
