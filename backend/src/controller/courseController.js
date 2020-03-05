var CourseModel = require('../model/courseModel');

exports.index = function(req, res) { 
    CourseModel.getAll(courses => {
        let priceMap = courses.map(course =>{
            return course['price'];
        })
        let maxPrice = Math.max(...priceMap);

        let creditsMap = courses.map(course =>{
            return course['maximumCredits'];
        })
        let maxCredit = Math.max(...creditsMap);

        let ratingMap = courses.map(course =>{
            return course['rating'];
        })
        let maxRating = Math.max(...ratingMap);

        res.json({
            'courses':courses,
            "length":courses.length,
            "max_price":maxPrice,
            "max_credit":maxCredit,
            "max_rating":maxRating
        })
    })
};


exports.get = function(req, res) { 
    CourseModel.getByFilter(courses => {        
        res.send(courses)
    })
};