const passport = require('passport');
const {
    isAuth
} = require('../config/authenticate');

const router = require('express').Router();

router.get('/',(req, res) => {
    res.render('profile');
})

module.exports = router;