const router = require('express').Router();


router.use('/home', require('./home'));
router.use('/logout', require('./logout'));
router.use('/user', require('./user'));
module.exports = router;
