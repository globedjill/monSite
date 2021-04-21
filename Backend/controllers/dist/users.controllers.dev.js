"use strict";

var passport = require('passport');

var _require = require('../queries/users.queries'),
    createUser = _require.createUser; // Creation d'un User


exports.signup = function _callee(req, res, next) {
  var body, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          body = req.body;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(createUser(body));

        case 4:
          user = _context.sent;
          res.json('creation Ok');
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error('erreur d\'enregistrement:' + _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Logged du user


exports.signIn = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      next(err);
    } else if (!user) {
      next(info.message);
    } else {
      req.login(user, function (err) {
        if (err) {
          next(err);
        } else {
          res.json(user);
        }
      });
    }
  })(req, res, next);
}; // Deconnexion


exports.signOut = function (req, res, next) {
  req.logOut();
  res.end();
};