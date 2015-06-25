/**
 * Created by atulr on 26/06/15.
 */
var express = require('express');
var router = express.Router();

var getlogout = function(req, res, next) {
  req.logout();
  res.redirect('/');
};

router.get('/',getlogout);

module.exports = router;

