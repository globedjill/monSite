"use strict";

var router = require('express').Router();

var formations = require('./api.formation.routes');

var experiences = require('./api.experience.routes');

var portfolio = require('./api.portfolio.routes');

var users = require('./api.users.routes');

var auth = require('./api.auth.routes'); //declarationdes routes sur /api


router.use('/users', users);
router.use('/auth', auth);
router.use('/formations', formations);
router.use('/experience', experiences);
router.use('/portfolio', portfolio);
router.get('/', function (req, res) {
  res.json(req.user);
});
module.exports = router;