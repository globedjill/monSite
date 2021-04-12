"use strict";

var router = require('express').Router();

var _require = require('../controllers/formation.controllers'),
    formationList = _require.formationList,
    formationRepucOne = _require.formationRepucOne,
    saveFormation = _require.saveFormation,
    formationDelete = _require.formationDelete;

router.post('/', saveFormation);
router.get('/', formationList);
router.get('/one', formationRepucOne);
router["delete"]('/:formationId', formationDelete);
module.exports = router;