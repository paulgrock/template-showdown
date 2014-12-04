"use strict";

var React = require("react");
var langs = require('../../models/languages');

var TemplateLanguageSelect = React.createClass({
    handleChange: function(e) {
        this.props.onLangChange(e.target.value)
    },
    getInitialState: function() {
        return {
            langs: langs
        }
    },
    render: function () {
        var options = this.state.langs.map(function(lang) {
            return (
                <option value={lang.slug} key={lang.slug}>{lang.name}</option>
            )
        });
        return (
            <form action="post">
                <label htmlFor="language-selector">Select a Template Language</label>
                <select name="language-selector" id="language-selector" onChange={this.handleChange} >
                    {options}
                </select>
            </form>
        )
    }
});

module.exports = TemplateLanguageSelect;
