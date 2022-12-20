const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectToDatabase = require('./db');
const authRouter = require('./Routes/AuthRoute');
const campGroundRouter = require('./Routes/CampGroundRoutes');
const reviewRouter = require('./Routes/ReviewRoutes');
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/campgrounds', campGroundRouter);
app.use('/campgrounds/review', reviewRouter);

connectToDatabase();

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const server = app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}`);
});
