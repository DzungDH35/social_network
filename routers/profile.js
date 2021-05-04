const router = require('express').Router();
const userService = require('../services/userService')
const friendService = require('../services/friendService')
// tường nhà
router.get('/:id', (async (req, res) => {
    try {
        let user = await userService.getUserById(req.params.id);
        let isFriend = await friendService.isFriend(req.user._id, req.params.id)
        let isRequestToAddFriend = await friendService.isRequestToAddFriend(req.params.id, req.user._id)
        let isYourself = req.user._id === req.params.id
        res.render('profile', {
            user: user,
            isFriend: isFriend,
            isYourself: isYourself,
            isRequestToAddFriend: isRequestToAddFriend
        })
    } catch (e) {
        res.status(404).send("Not found")
    }

}))



module.exports = router;
