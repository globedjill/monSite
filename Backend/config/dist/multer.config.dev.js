"use strict";

var _require = require('../app'),
    app = _require.app;

var multer = require('multer');

var upload = multer({
  dest: path.join(__dirname + '/upload')
});