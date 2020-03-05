const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var ConnectModel = require('./connectModel');



// Connection URL
let url = 'mongodb://localhost:27017';
// Database Name
let dbName = 'couser_catalog';
// Create a new MongoClient
let client = new MongoClient(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports.getAll = function (next) {
   // Use connect method to connect to the Server

   ConnectModel.connect( db =>{
        const col = db.collection('course');
            // Get first two documents that match the query
        col.find({}).toArray((err, data) => {
            assert.equal(null, err);                 
            next(data);       
        });
        
    })
}

module.exports.getByFilter = function (next) {
    // Use connect method to connect to the Server
 
    ConnectModel.connect( db =>{
         const col = db.collection('course');
             // Get first two documents that match the query
         col.find({
             "price":{$gt:24.5},
             "rating": {$gt:3},
             "maximumCredits":{$gt:2}
            }).toArray((err, data) => {
             assert.equal(null, err);                   
             next(data);       
         });
         
     })
 }