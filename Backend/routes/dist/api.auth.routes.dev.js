"use strict";

var router = require('express').Router();

var _require = require('../controllers/auth.controllers'),
    googleAuth = _require.googleAuth,
    googleAuthCb = _require.googleAuthCb; // Redirectiondes routes vers /api/auth


router.get('/google', googleAuth);
router.get('/google/cb', googleAuthCb);
module.exports = router;