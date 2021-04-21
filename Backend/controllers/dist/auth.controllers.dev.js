"use strict";

var passport = require('passport');

exports.googleAuth = function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  console.log(res);
  passport.authenticate('google', {
    scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
  })(req, res, next);
};

exports.googleAuthCb = function (req, res, next) {
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  })(req, res, next);
};