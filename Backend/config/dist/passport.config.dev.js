"use strict";

var _require = require('../app'),
    app = _require.app;

var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var _require2 = require('../queries/users.queries'),
    findUserPerEmail = _require2.findUserPerEmail,
    findUserPerId = _require2.findUserPerId;

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user._id);
});
passport.deserializeUser(function _callee(id, done) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(findUserPerId(id));

        case 3:
          user = _context.sent;
          done(null, user);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          done(_context.t0, null);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
passport.use('local', new LocalStrategy({
  usernameField: 'email'
}, function _callee2(email, password, done) {
  var user, match;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(findUserPerEmail(email));

        case 3:
          user = _context2.sent;

          if (!user) {
            _context2.next = 11;
            break;
          }

          _context2.next = 7;
          return regeneratorRuntime.awrap(user.comparePassword(password));

        case 7:
          match = _context2.sent;

          if (match) {
            done(null, user);
          } else {
            done(null, false, {
              message: 'Mot de passe erronée'
            });
          }

          _context2.next = 12;
          break;

        case 11:
          done(null, false, {
            message: 'Utilisateur non trouvé'
          });

        case 12:
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          done(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
}));