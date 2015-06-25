/**
 * Created by atulr on 26/06/15.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function (req, res, next) {
  req.logout(); //ensuring that we logout
  res.sendFile('loginPage.html', {root: path.join(__dirname, '../views')});
});

module.exports = router;
