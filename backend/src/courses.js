const express = require('express');
const routers = express();
const authenticateJWT = require('./authenticateJWT');

const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "language": "Italian",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
];

routers.get('/courses', authenticateJWT, function (req, res){
    res.json(books);
});
routers.get('/courses/free', function (req, res){
    res.json(books);
});


module.exports = routers
