var router = require('express').Router();
const api = require('./api.routes');
const formation = require('../database/models/formation.model');

// /* GET home page. */
// router.get('/', function(req, res, next) { res.render('index', { title: 'Express' }); });

router.use('/api', api);
// router.get('/', (req, res) => { res.render('/public/index') });

// router.get('/formationForm', (req, res) => { res.json('/formationForm'); })
// router.get('/parcour', (req, res) => { res.json('/parcour'); })
// router.get('/formation', formation)



module.exports = router;