var express = require('express');

var router = express.Router();
var login = require('./login/login.router');
var path = require('path');
var home = require('./home/home.router');
const signup = require('./signup/signup.router');
router.use(express.static(path.join(__dirname, 'login')));
router.use(express.static(path.join(__dirname, 'home')));
router.use(express.static(path.join(__dirname, 'signup')));

router.use('/', login);
router.use('/home', home);
router.use('/signup', signup);


module.exports = router;