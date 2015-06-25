var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var indexRoutes = require('./routes/index.js');
var loginRoute = require('./routes/login.js');
var logoutRoute = require('./routes/logout.js');
var loginPageRoute = require('./routes/loginPage.js');


var passport = require('passport');
require('./scripts/passport-config/passport-local-strategy.js');
var passUtil = require('./scripts/passport-config/pass-util.js');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRoutes);
app.use('/login', loginRoute);
app.use('/logout',logoutRoute);
app.use('/loginPage',loginPageRoute);

//To redirect to login if no user is logged in
app.use(passUtil.ensureAuthenticated);

//To serve static content in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
//================
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error' + err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send('error' + err.message);
});


module.exports = app;
