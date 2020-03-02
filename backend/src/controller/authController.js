// contactController.js
// Import contact model
Auth = require('../model/authModel');
// Handle index actions
exports.login = function (req, res) {
    let user = Auth.get();
    
    if (!user) {
        res.json({
            status: "error",
            message: err,
        });
    }
    res.json({
        status: "success",
        data: user
    });
    
};
