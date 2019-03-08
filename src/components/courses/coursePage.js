"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseStore = require('../../stores/courseStore');
var CoursesList = require('./coursesList');

var CoursesPage = React.createClass({
    getInitialState: function() {
      return {
        courses: CourseStore.getAllAuthors()
      };
    },
    componentWillMount: function() {
        CourseStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        CourseStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({ courses: CourseStore.getAllAuthors() });
    },
    render: function() {
      return (
          <div>
            <h1>Courses</h1>
            <Link to='addCourse' className='btn btn-default'>Add Course</Link>
            <CoursesList courses={this.state.courses} />
          </div>
        );
      }
  }
);

module.exports = CoursesPage;
