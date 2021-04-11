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
    type: String
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
});
var Experience = mongoose.model('experience', experienceSchema);
module.exports = Experience;