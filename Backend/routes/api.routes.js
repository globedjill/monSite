const router = require('express').Router();
const formations = require('./api.formation.routes');
const experiences = require('./api.experience.routes');
const users = require('./api.users.routes');
const auth = require('./api.auth.routes');


//declarationdes routes sur /api
router.use('/users', users);
router.use('/auth', auth);
router.use('/formations', formations);
router.use('/experiences', experiences);

router.get('/', (req, res) => {
    res.json(req.user);
});

module.exports = router;