"use strict";

const express = require('express'),
      router = express.Router();
let pry = require('pryjs');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/error', function(req, res) {
    res.render('error');
});

router.post('/hello', function(req, res) {
    console.log(req);
    res.send('Hi');
});

exports.routes = router;
