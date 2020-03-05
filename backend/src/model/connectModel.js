const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
let url = 'mongodb://localhost:27017';
// Database Name
let dbName = 'couser_catalog';
// Create a new MongoClient
let client = new MongoClient(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});



module.exports.connect = function (next) {
    // Use connect method to connect to the Server
    client.connect(function(err, client) {
         assert.equal(null, err);
         console.log("Connected correctly to server"); 
         const db = client.db(dbName);
         next(db);          
     });     
 }
