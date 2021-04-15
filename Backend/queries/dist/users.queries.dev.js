"use strict";

var User = require('../database/models/user.model');

exports.createUser = function _callee(user) {
  var hashedPassword, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.hashPassword(user.password));

        case 3:
          hashedPassword = _context.sent;
          newUser = new User({
            pseudo: user.pseudo,
            local: {
              email: user.email,
              password: hashedPassword
            }
          });
          return _context.abrupt("return", newUser.save());

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; // Signin


exports.findUserPerEmail = function _callee2(email) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            'local.email': email
          }).exec());

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.findUserPerId = function (id) {
  return User.findById(id).exec();
};