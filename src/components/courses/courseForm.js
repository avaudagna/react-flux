"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Combo = require('../common/comboInput');

var CourseForm = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired,
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        erros: React.PropTypes.object
    },

    render: function () {
      return (
        <form>
            <h1>Edit Course</h1>
            <Input
                name='title'
                label='Title'
                value={this.props.course.title}
                onChange={this.props.onChange}
                error={this.props.errors.title}/>
            <Combo
                name='author'
                label='Author'
                options={this.props.authors}
                selected={this.props.course.author}
                onChange={this.props.onChange}
                error={this.props.errors.author}/>
            <Input
                name='category'
                label='Category'
                value={this.props.course.category}
                onChange={this.props.onChange}
                error={this.props.errors.title}/>
            <Input
                name='length'
                label='Length'
                value={this.props.course.length}
                onChange={this.props.onChange}
                error={this.props.errors.title}/>
            <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave}/>
        </form>
      );
    }
});

module.exports = CourseForm;