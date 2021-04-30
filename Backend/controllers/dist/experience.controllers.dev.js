"use strict";

var _require = require('../queries/experience.queries'),
    createExperience = _require.createExperience,
    getExperience = _require.getExperience,
    getOneId = _require.getOneId,
    experienceUpdate = _require.experienceUpdate,
    experienceDelete = _require.experienceDelete;

exports.saveExperience = function _callee(req, res, next) {
  var body;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          body = req.body;
          _context.next = 4;
          return regeneratorRuntime.awrap(createExperience(body));

        case 4:
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.experienceList = function _callee2(req, res, next) {
  var experience;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getExperience());

        case 3:
          experience = _context2.sent;
          res.json(experience);
          console.log(experience);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.updateExperience = function _callee3(req, res, next) {
  var experienceId, body, experience, experiences;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          experienceId = req.params.experienceId;
          _context3.prev = 1;
          body = req.body;
          _context3.next = 5;
          return regeneratorRuntime.awrap(getOneId(experienceId));

        case 5:
          experience = _context3.sent;
          _context3.next = 8;
          return regeneratorRuntime.awrap(experienceUpdate(experience, body));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(getExperience());

        case 10:
          experiences = _context3.sent;
          res.json(experiences);
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](1);
          next(_context3.t0);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

exports.deleteExperience = function _callee4(req, res, next) {
  var experienceId, experiences;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          experienceId = req.params.experienceId;
          _context4.next = 4;
          return regeneratorRuntime.awrap(experienceDelete(experienceId));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(getExperience());

        case 6:
          experiences = _context4.sent;
          res.json(experiences);
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};