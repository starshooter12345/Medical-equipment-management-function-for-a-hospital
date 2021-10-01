const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('../backend/routes/posts');

//app middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //To parse the incoming requests with JSON payloads
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL =
  'mongodb+srv://buddhi:buddhi123@mernapp.0nbkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => console.log('DB connection error', err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
