const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
module.exports = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://paro:Xv13nKXS6qsVUkAh@yelpcampcluster1.5bdldqy.mongodb.net/YelpCamp?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`CONNECTED TO DATABASE`);
  } catch (err) {
    console.log(`CAN'T CONNECT TO DATABASE`, err);
  }
};
