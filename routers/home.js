const passport = require('passport');
const {
    isAuth
} = require('../config/authenticate');

const router = require('express').Router();

router.get('/', passport.authenticate("jwt", {
    session: true,
    failureRedirect: '/login'
}), (req, res) => {
    res.render('home');
})

module.exports = router;