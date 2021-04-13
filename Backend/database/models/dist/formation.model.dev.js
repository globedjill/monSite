"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var formationSchema = schema(_defineProperty({
  nomFormation: {
    type: String // maxlenght: 140,
    // minlenght: 3,
    // required: true,
    // index: Number

  },
  option: {
    type: String
  },
  image: {
    type: String
  },
  alt: {
    type: String
  },
  lieu: {
    type: String
  },
  adresse: {
    type: String
  },
  dateEntree: {
    type: Date
  },
  dateSortie: {
    type: Date
  },
  contenu: {
    type: String
  },
  liste: {
    type: []
  }
}, "lieu", {
  type: String
}), {
  timestamps: true
}); // formationSchema.pre('save', function() {
//     return Formation.countDocuments().exec().then(nbr => this.index = nbr + 1);
// })

var Formation = mongoose.model('formation', formationSchema);
module.exports = Formation;