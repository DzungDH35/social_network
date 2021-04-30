const router = require('express').Router();
const {isAuth, isNotAuth} = require('../config/authenticate');

router.use('/login', require('./login'));
router.use('/home', require('./home'));
router.use('/register', require('./register'));
router.use('/logout', require('./logout'));
router.use('/profile', require('./profile'));

module.exports = router;
