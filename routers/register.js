const router = require('express').Router();
const User = require('../models/user');
const userService = require('../services/userService')
const schoolService = require('../services/schoolService')
require('dotenv').config();


router.post('/', async (req, res) => {
    try {
        const savedUser = await userService.register(req.body);
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', async (req, res) => {
    try {
        let codes = await schoolService.getListsCode();
        res.render('register', {
            codes: codes
        });
    } catch (e) {
        res.status(400).send('get register')
    }

})

module.exports = router;
