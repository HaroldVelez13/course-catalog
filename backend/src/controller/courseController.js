var Course = require('../model/courseModel');


// Handle index actions
exports.index = function(req, res) { 
    Course.get((courses)=>{
        res.send(courses); 
    })
};