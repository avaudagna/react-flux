"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var Router = require('react-router');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
          course: {title: '', author: {}, category: '', length: 0},
          errors: {},
          dirty: false
        };
    },

    componentWillMount: function(){
        var courseId = this.props.params.id;
        if (courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    courseFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.course.title.length < 3) {
            this.state.errors.title = 'Title must be at least 3 characters.';
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveCourse: function(event) {
        event.preventDefault();
        if(!this.courseFormIsValid()) {
            return;
        }
        if(this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }
        this.setState({dirty: false}, function() {
            toastr.success('Course saved.');
            this.transitionTo('courses');
        });
    },

    setCourseState: function(event) {
        var field = event.target.name;
        var value;
        if(field === 'author') {
            var author = AuthorStore.getAuthorById(event.target.value);
            value = {id: author.id, name: author.firstName + " " + author.lastName};
        } else {
            value = event.target.value;
        }
        return this.setState(function(prevState) {
            return { course: { ...prevState.course, [field]: value }, dirty: true }
        });
    },

    render: function () {
        return (
            <CourseForm
                authors={AuthorStore.getAllAuthors()}
                course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManageCoursePage;