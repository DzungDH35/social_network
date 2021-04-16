const router = require('express').Router();
const {isAuth, isNotAuth} = require('../config/authenticate');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

router.get('/', (req, res) => {    
    res.render('login');
})

router.post('/', async (req, res) => {
    const {
        userName,
        pwd
    } = req.body;
    const user = await User.findOne({
        userName
    }).lean();
    try {
        if (await bcrypt.compare(pwd, user.pwd)) {
            const token = jwt.sign({
                id: user._id
            }, process.env.SECRETKEY);
            res.cookie('token', token);
            res.redirect('/home');
        } else {
            res.json({
                status: 'err',
                error: 'Invalid username/pwd'
            })
        }
    } catch (e) {
        console.log(e);
    }
})



module.exports = router;