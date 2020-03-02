// courseModel.js
var database = require('./connectModel');

module.exports.get = function () {
    //database
    console.log(database)
    let Course = database.find().limit(18);
    return  Course;
}