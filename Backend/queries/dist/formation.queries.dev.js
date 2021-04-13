"use strict";

var Formation = require("../database/models/formation.model");

exports.getFormations = function () {
  return Formation.find({}).sort({
    dateSortie: -1
  }).exec();
};

exports.getOneId = function (formationId) {
  return Formation.findOne({
    _id: formationId
  }).exec();
};

exports.formationUpdate = function (formationId, formation) {
  return Formation.updateOne(formationId, formation);
};

exports.createFormation = function (formation) {
  var newFormation = new Formation(formation);
  return newFormation.save(formation);
};

exports.deleteFormation = function (formationId) {
  return Formation.findByIdAndDelete({
    _id: formationId
  }).exec();
};