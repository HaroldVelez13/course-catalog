var CourseModel = require('../model/courseModel');

exports.index = function(req, res) { 
    CourseModel.getAll(courses => {
        res.send(courses)
    })
};