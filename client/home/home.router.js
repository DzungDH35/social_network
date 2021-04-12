const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {
        session: false,
        failureRedirect: '/'
    }),
    (req, res) => {
        res.header('Content-Type', 'text/html; charset=UTF-8');
        res.sendFile(path.join(__dirname + '/home.component.html'));
    })

module.exports = router;