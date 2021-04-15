var express = require('express');
const morgan = require('morgan');
var path = require('path');

const app = express();
exports.app = app;

const routing = require('./routes');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const passport = require('passport');
require('./database/index.database');
require('./config/session.config');
require('./config/passport.config');

app.use(passport.session());

app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routing);

app.use(express.static(path.join(__dirname, '/../public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


module.exports = app;