var express = require('express');
var router = express.Router();
var path = require('path');
var passUtil = require('../scripts/passport-config/pass-util.js');

router.get('/', passUtil.ensureAuthenticated);

router.get('/', function (req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
  //res.send('index :D ' + req.user);
});

module.exports = router;
