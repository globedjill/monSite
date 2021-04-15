var router = require('express').Router();
const api = require('./api.routes');
const formation = require('../database/models/formation.model');


router.use('/api', api);


module.exports = router;