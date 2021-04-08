var express = require('express');

var router = express.Router();
var account = require('./api/account.api');


router.use('/', account);


module.exports = router;