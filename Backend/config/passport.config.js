const { app } = require('../app');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { findUserPerEmail, findUserPerId } = require('../queries/users.queries');
const util = require('util');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user._id)
});

passport.deserializeUser(async(id, done) => {
    try {
        const user = await findUserPerId(id);
        done(null, user)
    } catch (e) {
        done(e, null);
    }
})

passport.use('local', new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done) => {
    try {
        const user = await findUserPerEmail(email);
        if (user) {
            const match = await user.comparePassword(password);
            if (match) {
                done(null, user);
            } else {
                done(null, false, { message: 'Mot de passe erronée' });
            }
        } else {
            done(null, false, { message: 'Utilisateur non trouvé' });
        }

    } catch (e) {
        done(e);
    }
}));

passport.use('google', new GoogleStrategy({
    clientID: '636533097414-m3o3licsluhjnqb2dv44eudvo9anuf76.apps.googleusercontent.com',
    clientSecret: '2OICi0OY2ouOqYTm9bidq9cJ',
    callbackURL: '/api/auth/google'
}, (accessToken, refreshToken, profile, done) => {
    console.log(util.inspect(profile, { compact: true, depth: 5, breackLength: 80 }));
    done(null, false, { message: 'test' });
}))