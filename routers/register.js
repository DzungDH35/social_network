const router = require('express').Router();
const {isAuth, isNotAuth} = require('../config/authenticate');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res) => {

    const {
        userName,
        name,
        email,
        pwd: plainText
    } = req.body;
    console.log(req.body);

    try {
        pwd = bcrypt.hashSync(plainText, 4);
        const savedUser = await User.create({
            userName,
            email,
            name,
            pwd
        });
        res.send('OK');
        console.log(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', (req, res) => {
    res.render('register');
})

module.exports = router;