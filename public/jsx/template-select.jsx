"use strict";

var React = require("react");
var templates = require('../../models/templates');

var TemplateSelect = React.createClass({
    getInitialState: function() {
        return {
            selectedLang: 'dust',
            templates: templates
        }
    },
    handleChange: function(e) {
        var templateSlug = e.target.value;
        var template = this.state.templates[this.props.selectedLang].filter(function(template) {
            return template.slug === e.target.value
        })
        this.props.onTemplateChange(
            templateSlug,
            template[0].content,
            template[0].json
        )
    },
    render: function () {
        var options = this.state.templates[this.props.selectedLang].map(function(template) {
            return (
                <option value={template.slug} key={template.slug}>{template.title}</option>
            )
        });
        return (
            <form action="post">
                <label htmlFor="template-selector">Select a Template</label>
                <select name="template-selector" id="template-selector" onChange={this.handleChange}>
                    {options}
                </select>
            </form>
        )
    }
});

module.exports = TemplateSelect
