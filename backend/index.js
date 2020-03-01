const express = require('express');

const bodyParser = require('body-parser');
const auth = require('./src/auth');
const courses = require('./src/courses');

const app = express();

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.use(auth);
app.use(courses);



app.listen(3000);