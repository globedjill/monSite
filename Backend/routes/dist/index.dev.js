"use strict";

var router = require('express').Router();

var api = require('./api.routes');

var formation = require('../database/models/formation.model');

router.use('/api', api);
module.exports = router;