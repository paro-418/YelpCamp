const bcrypt = require('bcryptjs');

module.exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports.checkPassword = async (candidatePassword, storedPassword) => {
  return await bcrypt.compare(candidatePassword, storedPassword);
};
