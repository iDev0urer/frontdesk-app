"use strict";

let pry = require('pryjs');

module.exports = function(app) {
    require("fs").readdirSync(__config.controller_dir).forEach(function(file) {
        let route = require(__config.controller_dir + `/${file}`),
            base = '/';
        if (route.base) base = route.base;
        app.use(base, route.routes);
    });
}
