'use strict';

var React = require('react');

var JsonInput = React.createClass({
    componentDidMount: function () {
        var codeMirror = require("codemirror");
        this.editor = this.refs.jsonEditor.getDOMNode();
        this.cm = codeMirror.fromTextArea(this.editor, {
            lineNumbers: true,
            mode: {
                name: "javascript",
                json: true
            },
            theme: "solarized"
        });
        this.cm.on("change", this.handleChange);
    },
    componentDidUpdate: function (nextProps, nextState) {
        var newVal = JSON.stringify(nextProps.jsonContent),
            codeMirrorVal = this.cm.getValue();
        if (!(codeMirrorVal === newVal || codeMirrorVal === this.editor.value))  {
            this.cm.setValue(JSON.stringify(nextProps.jsonContent));
        }
    },
    handleChange: function(codeMirror) {
        var value = codeMirror.getValue();
        if (value !== this.editor.value) {
            if (this.props.codeChange) {
                this.props.codeChange({
                    target: {
                        value: JSON.parse(value)
                    }
                })
                if (value !== this.editor.value) {
                    this.cm.setValue(this.editor.value);
                }
            }
        }
    },
    render: function() {
        var transformedJson = JSON.stringify(this.props.jsonContent);
        return (
            <form action="post">
                <textarea name="json-code" id="json-code" cols="30" rows="10" ref="jsonEditor" value={transformedJson} onChange={this.props.codeChange}></textarea>
            </form>
        )
    }
})

module.exports = JsonInput;
