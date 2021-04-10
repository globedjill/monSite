var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('short'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencsoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../../public')));

app.get('*', (req, res) => {
    res.sendFile('../../public/index.html');
});

module.exports = app;