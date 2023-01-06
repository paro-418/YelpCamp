const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`CONNECTED TO DATABASE`);
  } catch (err) {
    console.log(`CAN'T CONNECT TO DATABASE`, err);
  }
};
