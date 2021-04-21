"use strict";

var _require = require('../queries/formation.queries'),
    getFormations = _require.getFormations,
    createFormation = _require.createFormation,
    deleteFormation = _require.deleteFormation,
    formationUpdate = _require.formationUpdate,
    getOneId = _require.getOneId;

exports.saveFormation = function _callee(req, res, next) {
  var body;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          body = req.body;
          _context.next = 4;
          return regeneratorRuntime.awrap(createFormation(body));

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.updateFormation = function _callee2(req, res, next) {
  var formationId, body, formation, formations;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          formationId = req.params.formationId;
          _context2.prev = 1;
          body = req.body;
          _context2.next = 5;
          return regeneratorRuntime.awrap(getOneId(formationId));

        case 5:
          formation = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(formationUpdate(formation, body));

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(getFormations());

        case 10:
          formations = _context2.sent;
          res.json(formations);
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          next(_context2.t0);
          console.error(_context2.t0);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

exports.formationList = function _callee3(req, res, next) {
  var formations;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(getFormations());

        case 3:
          formations = _context3.sent;
          res.json(formations);
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
          console.error(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.formationDelete = function _callee4(req, res, next) {
  var formationId, formations;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          formationId = req.params.formationId;
          _context4.next = 4;
          return regeneratorRuntime.awrap(deleteFormation(formationId));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(getFormations());

        case 6:
          formations = _context4.sent;
          res.json(formations);
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

exports.uploadImgFormation = function (res, req, next) {};