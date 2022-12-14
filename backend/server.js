const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const connectToDatabase = require('./db');
const authRouter = require('./Routes/AuthRoute');
app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);

connectToDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}`);
});
