const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const seedDb = require('./seeds');

const players = require('./routes/players');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// allows api calls
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURL;

// Connect to the database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Use routes
app.use('/players', players);

// Add players
seedDb();

app.listen(5000, () => {
  console.log('App started on port 5000');
});
