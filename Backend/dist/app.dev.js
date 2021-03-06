"use strict";

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var fs = require('fs');

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
app.use(routing);
app.use(express["static"](path.join(__dirname, 'public')));
app.use(express["static"](path.join(__dirname, 'public/img')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + './../public/index.html'));
});

var multer = require('multer');

var upload = multer({
  storage: multer.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, path.join(__dirname, 'public/img'));
    },
    filename: function filename(req, file, cd) {
      cd(null, "".concat(file.originalname));
    }
  })
});
app.post("/api/upload", upload.array('f'), function (req, res, next) {
  res.end();
});
app["delete"]('/api/upload/:filename', function (req, res, next) {
  var filename = req.params.filename;
  var e = req.params;
  fs.unlink(path.join(__dirname, "public/img/".concat(filename)), function (err) {
    res.end();
  });
  console.log(e);
});
module.exports = app;