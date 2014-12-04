'use strict';

var React = require('react'),
    dust = require('dustjs-linkedin/lib/server'),
    jade = require("jade"),
    hbs = require("handlebars"),
    nunjucks = require("nunjucks");

require('dustjs-helpers');

var CompiledTemplate = React.createClass({
    compileTemplate: function(template) {
        if (template.selectedLang === "dust") {
            return dust.compile(template.templateContent, template.selectedTemplate);
        }

        if (template.selectedLang === "jade") {
            return jade.compileClient(template.templateContent)
        }

        if (template.selectedLang === "hbs") {
            return hbs.precompile(template.templateContent)
        }

        if (template.selectedLang === "nunjucks") {
            return nunjucks.compile(template.templateContent);
        }

    },
    render: function() {
        // compilied version of the above form
        var compiledFunc = this.compileTemplate(this.props.template);
        return (
            <code>
                <pre id="console" className="console">
                    {compiledFunc}
                </pre>
            </code>
        )
    }
})

module.exports = CompiledTemplate;
