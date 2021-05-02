const router = require('express').Router();
const userService = require('../services/userService')

// tường nhà
router.get('/:id', (async (req, res) => {
    console.log(req.params.id);
    let user = await userService.getUserById(req.params.id);
    res.render('profile', {
        user: user
    })
}))

module.exports = router;
