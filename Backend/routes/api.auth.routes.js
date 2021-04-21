const router = require('express').Router();
const { googleAuth, googleAuthCb } = require('../controllers/auth.controllers');


// Redirectiondes routes vers /api/auth
router.get('/google', googleAuth);
router.get('/google/cb', googleAuthCb);

module.exports = router;