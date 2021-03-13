var express = require('express');

var router = express.Router();
var login = require('./api/login.api');

router.use('/login', login);


module.exports = router;