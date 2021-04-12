"use strict";

var Formation = require("../database/models/formation.model");

exports.getFormations = function () {
  return Formation.find({}).exec();
};

exports.createFormation = function (formation) {
  var newFormation = new Formation(body);
  return newFormation.save();
};