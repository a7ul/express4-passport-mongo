/**
 * Created by atulr on 26/06/15.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var passUtil = require('../scripts/passport-config/pass-util.js');

router.get('/', passUtil.ensureAuthenticated);

router.get('/', function (req, res, next) {
  console.log('logged in as ',req.user);
  res.redirect('/');
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/loginPage',
  failureFlash : true
}));

module.exports = router;
