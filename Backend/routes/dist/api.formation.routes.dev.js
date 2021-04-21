"use strict";

var router = require('express').Router();

var _require = require('../controllers/formation.controllers'),
    formationList = _require.formationList,
    saveFormation = _require.saveFormation,
    formationDelete = _require.formationDelete,
    updateFormation = _require.updateFormation,
    uploadImgFormation = _require.uploadImgFormation; // Destination api/formations


router.post('/update/:formationId', updateFormation);
router.post('/', saveFormation);
router.get('/', formationList);
router["delete"]('/:formationId', formationDelete);
module.exports = router;