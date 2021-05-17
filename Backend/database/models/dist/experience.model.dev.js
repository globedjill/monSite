"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var experienceSchema = schema({
  dateEntree: {
    type: Date
  },
  dateSortie: {
    type: Date
  },
  image: {
    type: String,
    "default": 'image_default_experience-min.png'
  },
  alt: {
    type: String
  },
  typeContrat: {
    type: String
  },
  enseigne: {
    type: String
  },
  lieu: {
    type: String
  },
  fonction: {
    type: String
  }
}, {
  timestamps: true
});
var Experience = mongoose.model('experience', experienceSchema);
module.exports = Experience; // http://localhost:3000/