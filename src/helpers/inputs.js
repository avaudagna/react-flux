"use strict";

var React = require('react');
var Input = require('../components/common/textInput');

function renderInput (name, label, model, onChange, errors) {
    return (<Input
        name={name}
        label={label}
        value={model[name]}
        onChange={onChange}
        error={errors[name]} />);
}

module.exports.renderInput = renderInput;