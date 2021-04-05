const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

router.post('/login', async (req, res) => {
    const {userName, pwd} = req.body;
    const user = await User.findOne({userName}).lean();

    if (await bcrypt.compare(pwd, user.pwd)){
        const token = jwt.sign({id: user._id}, process.env.SECRETKEY);
        res.cookie('token', token);
        res.json({msg:'OK', token: token});
    } else {
        res.json({status: 'err', error: 'Invalid username/pwd'})
    }
})

router.post('/register', async (req, res) => {

    const {userName, name, email, pwd: plainText} = req.body;
    pwd = bcrypt.hashSync(plainText, 4);

    try {
        const savedUser = await User.create({
            userName,
            email,
            name,
            pwd
        });
        res.send('OK');
        console.log(savedUser);
    } catch (err){
        res.status(400).send(err);
    }
});

router.post('/logout', async (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
})

module.exports = router;