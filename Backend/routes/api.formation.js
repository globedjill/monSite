const router = require('express').Router();
const { formationList, formationRepucOne, saveFormation, formationDelete } = require('../controllers/formation.controllers');

router.post('/', saveFormation);
router.get('/', formationList);
router.get('/one', formationRepucOne);
router.delete('/:formationId', formationDelete);

module.exports = router;