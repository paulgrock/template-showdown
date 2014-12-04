'use strict';


var templates = require('../models/templates'),
    React = require('react');
require('node-jsx').install({
    extension: '.jsx'
});

var main = require('../public/jsx/main.jsx');

module.exports = function (router) {
    var markup = React.renderToString(
        main({
            templates: templates
        })
    );
    router.get('/', function (req, res) {

        res.render('index', {
            body: markup,
            templates: templates
        });

    });

};
