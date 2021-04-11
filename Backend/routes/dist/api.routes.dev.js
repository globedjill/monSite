"use strict";

var router = require('express').Router();

var formations = require('./api.formation');

var experiences = require('./api.experience');

router.use('/formations', formations);
router.use('/experiences', experiences);
module.exports = router;