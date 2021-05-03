const router = require('express').Router();
const User = require('../models/user');
const userService = require('../services/userService')
const schoolService = require('../services/schoolService')
require('dotenv').config();


router.post('/', async (req, res) => {
    try {
        const savedUser = await userService.createUser(req.body);
        console.log(savedUser);
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    let codes = await schoolService.getListsCode();
    res.render('register', {
        codes: codes
    });
})

module.exports = router;
