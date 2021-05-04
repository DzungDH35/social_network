const router = require('express').Router();
const groupService = require('../services/groupService')
router.get('/:groupId', async (req, res) => {
    res.render('group');
})

router.post('/joinRequest', async (req, res) => {
    try {
        await groupService.addJoinGroupRequest(req.user._id, req.body.groupId)
        res.send({msg: 'OK'})
    } catch (e) {
        res.status(400).send(e);
    }
})

router.post('/acceptJoinGroup', async (req, res) => {
    try {
        await groupService.joinGroup(req.body.reqId)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('joinRequest', async (req, res) => {
    try {
        let result = await groupService.getAllJoinGroupRequests(req.user._id);
        res.send(result)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('')


module.exports = router;
