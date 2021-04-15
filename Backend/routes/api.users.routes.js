const router = require('express').Router();
const { signup, signIn, signOut } = require('../controllers/users.controllers');


//redirection des routes sur : api/users/
// Creation d'un user
router.post('/signup', signup);
// Logged du user
router.post('/signin', signIn);
// Deconnexion
router.get('/signout', signOut);

module.exports = router;