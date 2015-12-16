//////////////////////////////////////////////////////////////////
// Sitewide functions that will be used for various things such //
// as encrypting and decrypting passwords.                      //
//////////////////////////////////////////////////////////////////
                                       
"use strict";

const SHA512 = require('crypto-js/hmac-sha512'),
      pry = require('pryjs');

let self = {};

self.generate_random_string = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
            
    }
    return text;
};

self.hash_password = function(password, salt) {
    let hash = SHA512(password, salt);
    return hash;
};

self.check_password = function(password, hash, salt) {
    let hashed_password = SHA512(password, salt);
    if (hashed_password === hash) {
        return true;
    } else {
        return false;
    }
}

eval(pry.it);
