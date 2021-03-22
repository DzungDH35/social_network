var express = require('express');

var router = express.Router();
var login = require('./login/login.router');
var path = require('path');
var home = require('./home/home.router');
router.use(express.static(path.join(__dirname, 'login')))

router.use('/', login);
router.use('/home', home);

module.exports = router;