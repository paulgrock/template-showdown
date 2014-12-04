"use strict";

var React = require("react");

var TemplateBox = React.createClass({
    render: function() {
        return (
            <form action="post">
                <textarea name="template-code" id="template-code" cols="30" rows="10" value={this.props.templateContent} onChange={this.props.templateChange}></textarea>
            </form>
        )
    }
});

module.exports = TemplateBox;
