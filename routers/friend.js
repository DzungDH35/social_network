const router = require('express').Router();
const userService = require('../services/userService')
const friendService = require('../services/friendService')

router.post('/addFriendRequests', async (req, res) => {
    try {
        if (await friendService.isRequestToAddFriend(req.user._id, req.body.id)) {
            await friendService.addFriend(req.body.id, req.user._id)
            await friendService.delAddFriendReq(req.body.id, req.user._id)
        } else await friendService.sendAddFriendRequest(req.user._id, req.body.id)
        res.send({msg: 'OK'});
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/addFriendRequests', async (req, res) => {
    try {
        let list = await friendService.getAllAddFriendRequests(req.user._id)
        res.send(list)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/acceptAddFriend', async (req, res) => {
    try {
        await friendService.addFriend(req.body.id, req.user._id)
        await friendService.delAddFriendReq(req.body.id, req.user._id)
        res.send({msg: 'OK'})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/denyAddFriend', async (req, res) => {
    try {
        await friendService.delAddFriendReq(req.body.id, req.user._id)
        res.send({msg: 'OK'})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
