var express = require('express');
const morgan = require('morgan');
var path = require('path');

const app = express();
const routing = require('./routes');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./database/index.database')


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