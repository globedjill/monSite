"use strict";

var mongoose = require('mongoose');

exports.clientPromise = mongoose.connect('mongodb+srv://virgil_admin:Evan25082010@cluster0.z3wus.mongodb.net/monSite?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Connexion db OK');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
})["catch"](function (err) {
  return console.log(err);
});