const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectToDatabase = require('./db');
const authRouter = require('./Routes/AuthRoute');
const campGroundRouter = require('./Routes/CampGroundRoutes');
const reviewRouter = require('./Routes/ReviewRoutes');
const path = require('path');
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/campgrounds', campGroundRouter);
app.use('/campgrounds/review', reviewRouter);

connectToDatabase();

// if (process.env.NODE_ENV === 'production')
if (true) {
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}
//  else {
//   app.get('/', (req, res) => {
//     res.send('Hello ');
//   });
// }
const server = app.listen(5000, () => {
  console.log(`Server Listening on port ${5000}`);
});
