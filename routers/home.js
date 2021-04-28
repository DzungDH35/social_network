const passport = require('passport');
const User = require('../models/user');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home',{
        user: req.user.name
    });
})

module.exports = router;
