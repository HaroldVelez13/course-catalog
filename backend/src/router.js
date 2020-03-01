// api-routes.js
// Initialize express router
let router = require('express').Router();
// Import contact controller
var courseController = require('./controller/courseController');
var authController = require('./controller/authController');
// Contact routes

router.route('/course').get(courseController.index);
router.route('/auth/login').post(authController.login);
router.route('/auth/logout').post(authController.logout);
router.route('/auth/token').post(authController.token);



// Export API routes
module.exports = router;