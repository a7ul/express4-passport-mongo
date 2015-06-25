/**
 * Passport local strategy file
 *
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../db/dbSchema.js');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  db.userModel.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use('local', new LocalStrategy(function (username, password, done) {
  db.userModel.findOne({username: username}, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      console.log('Unkown User ! ', username);
      return done(null, false, {message: 'Unknown user ' + username});
    }
    console.log('User Found! ', username, '..checking password now .. ');
    user.comparePassword(password, function (err, isMatch) {
      if (err) return done(err);
      if (isMatch) {
        console.log('Password also matches...', user);
        return done(null, user);
      } else {
        console.log('Invalid Password dude ');
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
}));
