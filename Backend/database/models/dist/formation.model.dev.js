"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var formationSchema = schema(_defineProperty({
  niveau: {
    type: String
  },
  diplome: {
    type: String
  },
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
    type: String,
    "default": 'image_default_formation-min.jpeg'
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
});
var Formation = mongoose.model('formation', formationSchema);
module.exports = Formation;