const router = require('express').Router();
const userService = require('../services/userService')
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('changePwd')
})

// test
router.get('/resetPwd', (req, res) => {
    res.render('resetPwd')
})

router.post('/', async (req, res) => {
    try {
        await userService.sendResetPwdId(req.body.email)
            .then(r => res.send(r));
    } catch (e) {
        res.status(400).send('Send email fail')
    }
})

router.get('/:resetId', (req, res) => {
    try {
        console.log(req.params.resetId);
        res.render('resetPwd');
    } catch (e) {
        console.log(e);
    }
})

router.post('/:resetId', async (req, res) => {
    try {
        let result = await userService.resetPassword(req.body.newPwd, req.params.resetId);
        if (result === null) res.status(400).send('Fail to reset pwd');
        res.status(200).send(result);
    } catch (e) {
        console.log(e);
        res.status(400).send('Fail to reset pwd')
    }
})
module.exports = router
