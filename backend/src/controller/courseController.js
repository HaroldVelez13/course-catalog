// CourseController.js
// Import Course model
Course = require('./courseModel');
// Handle index actions
exports.index = function (req, res) {
    Course.get(function (err, course) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Course retrieved successfully",
            data: course
        });
    });
};
