const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require("./src/router");

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);
/* app.use(auth);
app.use(courses); */



app.listen(3000);