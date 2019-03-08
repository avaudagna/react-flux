"use strict";

var React = require('react');
var renderInput = require('../../helpers/inputs').renderInput;

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        erros: React.PropTypes.object
    },

    render: function () {
      return (
        <form>
            <h1>Manage Author</h1>
            {renderInput('firstName', 'First Name', this.props.author,
                        this.props.onChange, this.props.errors)}
            {renderInput('lastName', 'Last Name', this.props.author,
                this.props.onChange, this.props.errors)}
            <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave}/>
        </form>
      );
    }
});

module.exports = AuthorForm;