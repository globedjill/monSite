"use strict";

var _require = require('../queries/portfolio.queries'),
    createPortfolio = _require.createPortfolio,
    recupTouLePortFolio = _require.recupTouLePortFolio,
    deleteOneSiteById = _require.deleteOneSiteById,
    getSiteById = _require.getSiteById,
    siteUpdate = _require.siteUpdate;

exports.savePortfolio = function _callee(req, res, next) {
  var body;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          body = req.body;
          _context.next = 4;
          return regeneratorRuntime.awrap(createPortfolio(body));

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log('erreur de sauvegarde du portfolio');
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.listPortfolio = function _callee2(req, res, next) {
  var recupList, essai;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(recupTouLePortFolio());

        case 3:
          recupList = _context2.sent;
          essai = res.json(recupList);
          console.log(essai);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log('erreur de recuperation de la liste du portfolio');
          next(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.updateSite = function _callee3(req, res, next) {
  var siteId, body, recupSiteById, recupPortfolio;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          siteId = req.params.portfolioId;
          body = req.body;
          _context3.next = 5;
          return regeneratorRuntime.awrap(getSiteById(siteId));

        case 5:
          recupSiteById = _context3.sent;
          _context3.next = 8;
          return regeneratorRuntime.awrap(siteUpdate(recupSiteById, body));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(recupTouLePortFolio());

        case 10:
          recupPortfolio = _context3.sent;
          res.json(recupPortfolio);
          _context3.next = 18;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log('une erreur est survenu lors de l\'enregistrement');
          next(_context3.t0);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.deleteUnSiteDuPortfolio = function _callee4(req, res, next) {
  var recupIdDunSite, portfolio;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          recupIdDunSite = req.params.portfolioId;
          _context4.next = 4;
          return regeneratorRuntime.awrap(deleteOneSiteById(recupIdDunSite));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(recupTouLePortFolio());

        case 6:
          portfolio = _context4.sent;
          res.json(portfolio);
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.log('une erreur est survenu lors de la suppression d\'un site du portfolio');
          next(_context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};