const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');

// Create Schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  about: {
    type: String
  },
  number: {
    type: Number
  },
  height: {
    type: Number
  },
  nationality: {
    type: String
  },
  images: [
    {
      type: String
    }
  ],
  position: {
    type: String
  },
  favouriteQuote: {
    type: String
  }
});

PlayerSchema.plugin(
  URLSlugs('name number', { field: 'slug' }, { unique: true })
);

module.exports = Player = mongoose.model('player', PlayerSchema);
