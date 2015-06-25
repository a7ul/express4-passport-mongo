var express = require('express');
var router = express.Router();
var passUtil = require('../scripts/passport-config/pass-util.js');

/* GET home page. */
router.get('/',passUtil.ensureAuthenticated);

router.get('/', function (req, res, next) {
  res.send('index :D ' + req.user);
});

module.exports = router;
