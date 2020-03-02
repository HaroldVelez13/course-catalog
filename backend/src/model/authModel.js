// userModel.js
const database = require('./connectModel');

/* // Export User model
const DB = database.db;
const User = DB.user;
 */
module.exports.get = function (username, password) {
    console.log(databe)
   let User = databe.find({username:username, password:password});
   return  User;
}


