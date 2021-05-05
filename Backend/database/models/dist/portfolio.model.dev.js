"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var portfolioSchema = schema({
  name: {
    type: String
  },
  lienSite: {
    type: String
  },
  description: {
    type: String
  },
  lienGit: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});
var Portfolio = mongoose.model('portfolio', portfolioSchema);
module.exports = Portfolio;