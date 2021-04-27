const router = require('express').Router();
const User = require('../models/user');
const userService = require('../services/userService')
require('dotenv').config();


router.post('/', async (req, res) => {
    try {
        const savedUser = await userService.saveUser(req.body);
        console.log(savedUser);
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', (req, res) => {
    res.render('register');
})

module.exports = router;
