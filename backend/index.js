const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/* const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'couser_catalog';

// Create a new MongoClient
const client = new MongoClient(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 });
 */



const apiRoutes = require("./src/router");



/* var allowMethods = function(req, res, next) {
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS"); next();
}
/* var allowCrossTokenHeader = function(req, res, next) { 
	res.header('Access-Control-Allow-Headers', 'token'); 
	next();
} */ 

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/* app.use(allowCrossTokenHeader); */






/* app.get('/api/course', function(req, res, next) { 

    // Use connect method to connect to the Server
    client.connect(function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
    
        const db = client.db(dbName);
    
        const col = db.collection('course');
            // Get first two documents that match the query
        col.find({}).limit(21).toArray(function(err, courses) {
            assert.equal(null, err);
            client.close();
            res.send(courses); 
        });
    });
});
 */
app.use('/api', apiRoutes);
/* app.use(auth);
app.use(courses); */



app.listen(3000);