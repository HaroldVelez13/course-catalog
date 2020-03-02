// CourseController.js
var DB = require('../model/connectModel');
var DBNAME = require('../model/connectModel');
var MongoClient = require('mongodb');



// Handle index actions
exports.index = function (req, res) {
    MongoClient.connect(DB, { useNewUrlParser: true }, (err, client) => {
        // ... Open Conection
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }else{
            console.log(client)
            const db = client.db(DBNAME);
            let course = db.course.fin({}).limit(18);
        
            res.json({
                status: "success",
                message: "Course retrieved successfully",
                data: course
            });

            client.close()
        }       

        
    })  
};
