"use strict";

var Portfolio = require('../database/models/portfolio.model');

exports.createPortfolio = function (portfolio) {
  var newPortfolio = new Portfolio(portfolio);
  return newPortfolio.save(portfolio);
};

exports.recupTouLePortFolio = function () {
  return Portfolio.find({}).exec();
};

exports.deleteOneSiteById = function (siteId) {
  return Portfolio.findByIdAndDelete({
    _id: siteId
  }).exec();
};

exports.getSiteById = function (siteId) {
  return Portfolio.findOne({
    _id: siteId
  }).exec();
};

exports.siteUpdate = function (oldValues, newValues) {
  return Portfolio.updateOne(oldValues, newValues);
};