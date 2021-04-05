const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}), function(req, res){
    console.log(req.url);
    res.sendFile(path.join(__dirname + '/home.component.html'));
})

module.exports = router;
