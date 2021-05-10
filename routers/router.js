const router = require('express').Router();

router.use('/home', require('./home'));
router.use('/logout', require('./logout'));
router.use('/group', require('./group'));
router.use('/profile', require('./profile'));
router.use('/post', require('./post'));
router.use('/search', require('./search'));
router.use('/friend', require('./friend'));
router.use('/group', require('./group'));
router.use('/search_result', require('./search_result'));

module.exports = router;
