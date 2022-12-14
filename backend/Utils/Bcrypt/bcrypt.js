const bcrypt = require('bcryptjs');

module.exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
