"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;

var bCrypt = require('bcrypt');

var userSchema = schema({
  pseudo: {
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

userSchema.statics.hashPassword = function (password) {
  return bCrypt.hash(password, 10);
};

userSchema.methods.comparePassword = function (password) {
  return bCrypt.compare(password, this.local.password);
};

var User = mongoose.model('user', userSchema);
module.exports = User;