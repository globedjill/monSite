"use strict";

var router = require('express').Router();

var formations = require('./api.formation.routes');

var experiences = require('./api.experience.routes');

var users = require('./api.users.routes'); //declarationdes routes sur /api


router.use('/users', users);
router.use('/formations', formations);
router.use('/experiences', experiences);
router.get('/', function (req, res) {
  res.json(req.user);
});
module.exports = router;