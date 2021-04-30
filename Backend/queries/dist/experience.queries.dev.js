"use strict";

var Experience = require('../database/models/experience.model');

exports.getExperience = function () {
  return Experience.find({}).sort({
    dateSortie: -1
  }).exec();
};

exports.createExperience = function (experience) {
  var newExperience = new Experience(experience);
  return newExperience.save(experience);
};

exports.getOneId = function (experienceId) {
  return Experience.findOne({
    _id: experienceId
  }).exec();
};

exports.experienceUpdate = function (experienceId, experience) {
  return Experience.updateOne(experienceId, experience);
};

exports.experienceDelete = function (experienceId) {
  return Experience.findByIdAndDelete({
    _id: experienceId
  }).exec();
};