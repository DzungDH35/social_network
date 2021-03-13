var express = require('express');

var router = express.Router();
var login = require('./login/login.router');
router.use('/', login);

module.exports = router;