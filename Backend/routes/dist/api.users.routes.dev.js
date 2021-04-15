"use strict";

var router = require('express').Router();

var _require = require('../controllers/users.controllers'),
    signup = _require.signup,
    signIn = _require.signIn,
    signOut = _require.signOut; //redirection des routes sur : api/users/
// Creation d'un user


router.post('/signup', signup); // Logged du user

router.post('/signin', signIn); // Deconnexion

router.get('/signout', signOut);
module.exports = router;