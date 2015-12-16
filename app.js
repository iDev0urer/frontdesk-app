"use strict";
const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      mongo = require('mongoose'),
      app = express(),
      hbs = require('express-hbs'),
      pry = require('pryjs');

global.__config = require('./config/config');
let db = mongo.connect('localhost:27017/frontdesk');

// view engine setup
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/app/views/partials',
    layoutsDir: __dirname + '/app/views/layouts',
    defaultLayout: __dirname + '/app/views/layouts/default.hbs',
    beautify: true
}));
app.set('view engine', 'hbs');
app.set('views', __config.view_dir);
app.set('view cache', false);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/app/public')));

// Set up our controllers
// let router = express.Router();
// app.use(router);
// controllers
//     .setDirectory(__config.controller_dir)
//     .bind(router);

let routes = require(__config.router_path)(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
