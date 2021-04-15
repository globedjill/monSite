const passport = require('passport');
const { createUser } = require('../queries/users.queries');

// Creation d'un User
exports.signup = async(req, res, next) => {
    const body = req.body;
    try {
        const user = await createUser(body);
        console.log(user);
        res.json(user);
    } catch (e) {
        console.error(e);
    }
}

// Logged du user
exports.signIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(err)
        } else if (!user) {
            res.json({ errors: info.message });
        } else {
            req.login(user, (err) => {
                if (err) {
                    next(err);
                } else {
                    console.log('3');
                }
            })
        }
    })(req, res, next);
}


// Deconnexion
exports.signOut = (req, res, next) => {
    req.logOut();
}