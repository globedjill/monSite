var express = require('express');
const morgan = require('morgan');
var path = require('path');
const fs = require('fs');

const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, 'upload'));
        },
        filename: (req, file, cd) => {
            cd(null, file.originalname);
        }
    })
});

const app = express();
exports.app = app;


const routing = require('./routes');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const passport = require('passport');
const { join } = require('path');
require('./database/index.database');
require('./config/session.config');
require('./config/passport.config');

app.use(passport.session());

app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routing);

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Credentials', 'true');
// })

// Multer
app.post("/api/upload", upload.array('f'), (req, res, next) => {
    res.end();
});
app.delete('/api/upload/:filename', (req, res, next) => {
    const { filename } = req.params;
    fs.unlink(path.join(__dirname, `upload/${filename}`), err => {
        res.end();
    })
});

app.use(express.static(path.join(__dirname, '/../public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


module.exports = app;