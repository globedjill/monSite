const router = require('express').Router();
const formations = require('./api.formation.routes');
const experiences = require('./api.experience.routes');
const users = require('./api.users.routes');

router.use('/users', users);
router.use('/formations', formations);
router.use('/experiences', experiences);

// router.get('/', (req, res) => {
//     console.log(req.user);
// });

module.exports = router;