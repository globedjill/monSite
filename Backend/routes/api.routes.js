const router = require('express').Router();
const formations = require('./api.formation');
const experiences = require('./api.experience');

router.use('/formations', formations);
router.use('/experiences', experiences);

module.exports = router;