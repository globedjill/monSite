const router = require('express').Router();
const { formationList, saveFormation, formationDelete, updateFormation } = require('../controllers/formation.controllers');

// Destination api/formations
router.post('/update/:formationId', updateFormation);
router.post('/', saveFormation);
router.get('/', formationList);
router.delete('/:formationId', formationDelete);

module.exports = router;