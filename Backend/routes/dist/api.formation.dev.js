"use strict";

var router = require('express').Router();

var Formation = require('../database/models/formation.model');

router.post('/', function (req, res) {
  var body = req.body;
  console.log({
    body: body
  });
  var newFormation = new Formation(body);
  console.log(newFormation);
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
module.exports = router;