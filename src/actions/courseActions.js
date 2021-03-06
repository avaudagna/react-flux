"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
    createCourse: function(course) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: CourseApi.saveCourse(course)
        });
    },
    updateCourse: function(course) {
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COURSE,
            course: CourseApi.saveCourse(course)
        });
    },
    deleteCourse: function (id) {
        CourseApi.deleteCourse(id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE,
            id: id
        });
    }
};
module.exports = CourseActions;