const router = require('express').Router();
const { saveExperience, experienceList, updateExperience, deleteExperience } = require('../controllers/experience.controllers');

router.post('/update/:experienceId', updateExperience);
router.post('/', saveExperience);
router.get('/', experienceList);
router.delete('/:experienceId', deleteExperience);

module.exports = router;