var express = require('express');

var router = express.Router();
var login = require('./api/login.api');
var register = require('./api/register.api')

router.use('/login', login);
router.use('/register', register);


module.exports = router;