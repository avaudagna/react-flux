"use strict";

var React = require('react');
var _ = require('lodash');

var Combo = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        options: React.PropTypes.arrayOf( React.PropTypes.shape( { id: React.PropTypes.string.isRequired,
                                                                   firstName: React.PropTypes.string.isRequired,
                                                                   lastName: React.PropTypes.string.isRequired } ) ),
        selected: React.PropTypes.shape( { id: React.PropTypes.string.isRequired,
                                           firstName: React.PropTypes.string.isRequired,
                                           lastName: React.PropTypes.string.isRequired } ),
        onChange: React.PropTypes.func.isRequired,
        error: React.PropTypes.string
    },
    render: function() {
        var createAuthorOption = function (item) {
            var opts = {};
            if (!_.isEmpty(this.selected) && item.id === this.selected.id) {
                opts.selected = 'selected';
            }
            return <option {...opts} value={item.id}>{item.firstName} {item.lastName}</option>;
        };
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += ' ' + 'has-error';
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className='field'>
                    <select
                        name={this.props.name}
                        className='form-control'
                        ref={this.props.name}
                        onChange={this.props.onChange}>
                        {this.props.options.map(createAuthorOption, this)}
                    </select>
                </div>
                <div className='input'>{this.props.error}</div>
            </div>
        );
    }
});

module.exports = Combo;
