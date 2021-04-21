"use strict";

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var fs = require('fs');

var multer = require('multer');

var upload = multer({
  storage: multer.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, path.join(__dirname, 'upload'));
    },
    filename: function filename(req, file, cd) {
      cd(null, file.originalname);
    }
  })
});
var app = express();
exports.app = app;

var routing = require('./routes');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var passport = require('passport');

var _require = require('path'),
    join = _require.join;

require('./database/index.database');

require('./config/session.config');

require('./config/passport.config');

app.use(passport.session());
app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(routing); // app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Credentials', 'true');
// })
// Multer

app.post("/api/upload", upload.array('f'), function (req, res, next) {
  res.end();
});
app["delete"]('/api/upload/:filename', function (req, res, next) {
  var filename = req.params.filename;
  fs.unlink(path.join(__dirname, "upload/".concat(filename)), function (err) {
    res.end();
  });
});
app.use(express["static"](path.join(__dirname, '/../public')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
module.exports = app;