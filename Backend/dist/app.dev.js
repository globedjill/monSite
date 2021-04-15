"use strict";

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var app = express();
exports.app = app;

var routing = require('./routes');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var passport = require('passport');

require('./database/index.database');

require('./config/session.config');

require('./config/passport.config');

app.use(passport.session());
app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(routing);
app.use(express["static"](path.join(__dirname, '/../public')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
module.exports = app;