"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var userSchema = schema({
  userName: {
    type: String,
    required: true
  },
  local: {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
});
var User = mongoose.model('user', userSchema);
module.exports = User;