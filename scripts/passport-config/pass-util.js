/*
Common passport util file
 */

// Simple route middleware to ensure user is authenticated.  Otherwise send to login page.
var ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/loginPage')
};


module.exports = {
  ensureAuthenticated:ensureAuthenticated
}