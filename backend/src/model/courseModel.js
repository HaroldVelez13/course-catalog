const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// courseModel.js
var dbName = require('./connectModel');
var url = require('./connectModel');
// Create a new MongoClient
client = new MongoClient(url);


module.exports.get = function (next) {
    // Use connect method to connect to the Server
    client.connect(function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
    
        const db = client.db(dbName);
    
        const col = db.collection('course');
            // Get first two documents that match the query
        col.find({}).limit(21).toArray(function(err, courses) {
            assert.equal(null, err);
            next(courses); 
            client.close();
        });
    });
}