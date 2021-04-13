"use strict";

var _require = require('../app'),
    app = _require.app;

var session = require('express-session');

var MongoStore = require('connect-mongo')(session);

var mongoose = require('mongoose');

app.use(session({
  secret: 'je suis un secret',
  //Sauvegarde de session meme s'il n'y a pas de modification
  resave: false,
  //Sauvegarde de la session meme si pas utiliser
  saveUninitialized: false,
  cookie: {
    // On ne peut pas recuperer lesdonnée via le js-client
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24 * 14 // 14 jours

  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 * 24 * 14 // Durée de la connection

  })
}));