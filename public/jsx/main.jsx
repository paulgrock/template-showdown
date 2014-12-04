'use strict';

var React = require('react'),
    TemplateLanguageSelect = require('./template-language-select.jsx'),
    TemplateSelect = require('./template-select.jsx'),
    TemplateBox = require('./template.jsx'),
    CompiledTemplate = require('./compiled-template.jsx'),
    JsonInput = require('./json-input.jsx'),
    Output = require('./output.jsx'),
    dust = require('dustjs-linkedin/lib/server'),
    jade = require("jade"),
    hbs = require("handlebars"),
    nunjucks = require("nunjucks");

require('dustjs-helpers');

var renderTemplate = function renderTemplate(string, context, type, cb) {
    if (type === "dust") {
        return dust.renderSource(string, context, cb);
    }

    if (type === "jade") {
        return cb(null, jade.render(string, context));
    }

    if (type === "hbs") {
        return cb(null, hbs.compile(string)(context));
    }

    if (type === "nunjucks") {
        return nunjucks.renderString(string, context, cb);
    }
}

var AppTmpl = React.createClass({
    getInitialState: function() {
        var initialTemplate = this.props.templates.dust[0];
        return {
            selectedLang: 'dust',
            selectedTemplate: initialTemplate.slug,
            templateContent: initialTemplate.content,
            jsonContent: initialTemplate.json,
            renderedTemplate: "<h1>Lets get started</h1>"
        }
    },
    handleLangChange: function(lang) {
        // console.log(this.props.templates[lang][0].slug);
        var firstTemplate = this.props.templates[lang][0];
        console.log(firstTemplate.json);
        this.setState({
            selectedLang: lang,
            selectedTemplate: firstTemplate.slug,
            jsonContent: firstTemplate.json
        })
    },
    handleTemplateChange: function(template, content, context) {
        var self = this;
        self.setState({
            selectedTemplate: template,
            templateContent: content,
            jsonContent: context
        })

        renderTemplate(content, context, this.state.selectedLang, function(err, renderedTemplate) {
            self.setState({
                renderedTemplate: renderedTemplate
            })
        });
    },
    handleTemplateUpdate: function(e) {
        var content = e.target.value;
        var self = this;
        self.setState({
            templateContent: content
        })
        renderTemplate(content, this.state.jsonContent, this.state.selectedLang, function(err, renderedTemplate) {
            self.setState({
                renderedTemplate: renderedTemplate
            })
        })

    },
    handleCodeChange: function(e) {
        var self = this;
        var content = e.target.value;
        this.setState({
            jsonContent: content
        })
        renderTemplate(this.state.templateContent, content, this.state.selectedLang, function(err, renderedTemplate) {
            self.setState({
                renderedTemplate: renderedTemplate
            })
        })
    },
    render: function() {
        return (
            <div className="template-container">
                <TemplateLanguageSelect onLangChange={this.handleLangChange} />
                <TemplateSelect selectedLang={this.state.selectedLang} onTemplateChange={this.handleTemplateChange}/>
                <TemplateBox templateContent={this.state.templateContent} templateChange={this.handleTemplateUpdate} />
                <CompiledTemplate template={this.state} />
                <JsonInput jsonContent={this.state.jsonContent} codeChange={this.handleCodeChange}/>
                <Output renderedTemplate={this.state.renderedTemplate} />
            </div>
        )
    }
})

module.exports = AppTmpl;
