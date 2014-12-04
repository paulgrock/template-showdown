'use strict';

var React = require('react'),
    dust = require('dustjs-linkedin/lib/server');

require('dustjs-helpers');

var Output = React.createClass({
    render: function() {
        return (
            <code>
                <pre id="ouptut" className="ouptut" dangerouslySetInnerHTML={{__html: this.props.renderedTemplate}}>
                </pre>
            </code>
        )
    }
})

module.exports = Output;
