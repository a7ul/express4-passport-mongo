/**
 * Created by atulr on 26/06/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;

