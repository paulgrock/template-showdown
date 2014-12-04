'use strict';

var React = require("react"),
    templates = require('../../models/templates'),
    AppTmpl = require("../jsx/main.jsx");

React.render(
    <AppTmpl templates={templates} />,
    document.getElementById('template-container')
)
