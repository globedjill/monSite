"use strict";

var router = require('express').Router();

var Formation = require('../database/models/formation.model');

router.post('/', function (req, res) {
  var body = req.body;
  var newFormation = new Formation(body);
  newFormation.save().then(function (formation) {
    console.log(formation);
    res.json(body);
  })["catch"](function (err) {
    console.log({
      err: err
    });
    res.status(400).json(err);
  });
});
router.get('/', function (req, res) {
  Formation.find({}).exec().then(function (response) {
    res.json(response);
  });
});
module.exports = router;