const router = require('express').Router();
const userService = require('../services/userService')

router.get('/:mssv', (async (req, res) => {
    await userService.getUserByMSSV(req.params.mssv).then(user => {
        res.render('personal', {
            user: user
        })
    });
}))

module.exports = router;
