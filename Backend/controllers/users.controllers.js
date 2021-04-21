const passport = require('passport');
const { createUser } = require('../queries/users.queries');

// Creation d'un User
exports.signup = async(req, res, next) => {
    const body = req.body;
    try {
        const user = await createUser(body);
        res.json('creation Ok');
    } catch (e) {
        console.error('erreur d\'enregistrement:' + e);
    }
}

// Logged du user
exports.signIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(err);
        } else if (!user) {
            next(info.message);
        } else {
            req.login(user, (err) => {
                if (err) {
                    next(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
}

// Deconnexion
exports.signOut = (req, res, next) => {
    req.logOut();
    res.end();
}