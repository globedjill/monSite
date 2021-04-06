const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


mongoose.connect('mongodb+srv://virgil_admin:Evan25082010@cluster0.z3wus.mongodb.net/monsite?retryWrites=true&w=majority', {}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connexion db OK');
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = app;