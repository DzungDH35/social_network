const router = require('express').Router();
const userService = require('../services/userService')
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

router.get('/', (req, res) => {
    if (req.user !== undefined) console.log('ok');
    res.render('login');
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        let user = await userService.login(req.body.email, req.body.pwd);
        if (user !== null) {
            const token = jwt.sign({
                id: user._id
            }, process.env.SECRETKEY);
            res.cookie('token', token);
            res.json({token: token, msg: 'OK', status: 'success'});
        } else {
            res.status(400).json({
                status: 'error',
                msg: 'e'
            })
        }
    } catch (e) {
        console.log(e);
    }
})



module.exports = router;
