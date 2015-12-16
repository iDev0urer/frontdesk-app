"use strict";

let mongo = require('mongoose'),
    Schema = mongo.Schema;

let schema = Schema.new({
    email: String,
    password: String,
    password_salt: String
});

var Model = mongoose.model('User', schema);

module.exports = Model;
