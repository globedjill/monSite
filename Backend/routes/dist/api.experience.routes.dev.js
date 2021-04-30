"use strict";

var router = require('express').Router();

var _require = require('../controllers/experience.controllers'),
    saveExperience = _require.saveExperience,
    experienceList = _require.experienceList,
    updateExperience = _require.updateExperience,
    deleteExperience = _require.deleteExperience;

router.post('/update/:experienceId', updateExperience);
router.post('/', saveExperience);
router.get('/', experienceList);
router["delete"]('/:experienceId', deleteExperience);
module.exports = router;