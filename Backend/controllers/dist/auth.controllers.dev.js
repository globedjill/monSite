"use strict";

var passport = require('passport');

exports.signIn = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      next(err);
    } else if (!user) {
      res.json({
        errors: info.message
      });
    } else {
      req.login(user, function (err) {
        if (err) {
          next(err);
        } else {
          res.redirect('/');
        }
      });
    }
  })(req, res, next);
};

exports.signOut = function (req, res, next) {
  req.logOut();
};