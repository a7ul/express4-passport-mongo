/*
 Common passport util file
 */

var path = require('path');

// Simple route middleware to ensure user is authenticated.  Otherwise send to login page.
var ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    console.log('YEAH I AM IN');
    return next();
  }
  console.log('NO NOT AGAiN');
  //res.sendFile('loginPage.html', {root: path.join(__dirname, '../../views')});
  res.redirect('/loginPage');
};


module.exports = {
  ensureAuthenticated: ensureAuthenticated
}