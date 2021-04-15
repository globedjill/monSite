"use strict";

var router = require('express').Router();

var formations = require('./api.formation.routes');

var experiences = require('./api.experience.routes');

var users = require('./api.users.routes');

router.use('/users', users);
router.use('/formations', formations);
router.use('/experiences', experiences); // router.get('/', (req, res) => {
//     console.log(req.user);
// });

module.exports = router;