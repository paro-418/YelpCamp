const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectToDatabase = require('./db');
const authRouter = require('./Routes/AuthRoute');
const campGroundRouter = require('./Routes/CampGroundRoutes');
app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/campgrounds', campGroundRouter);

connectToDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}`);
});
