const router = require('express').Router();
const { formationList, saveFormation, formationDelete, updateFormation, getImageDefault } = require('../controllers/formation.controllers');

// Destination api/formations
router.post('/update/:formationId', updateFormation);
router.post('/', saveFormation);
router.get('/', formationList);
router.get('/imageDefault', getImageDefault);
router.delete('/:formationId', formationDelete);

module.exports = router;