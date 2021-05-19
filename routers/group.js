const router = require('express').Router();
const groupService = require('../services/groupService')
const Group = require('../models/group');
const { route } = require('./login');

router.get('/:groupId', async (req, res) => {
    const data = await Group.findById(req.params.groupId)
    res.render('group', {
        queryPath: req.path,
        user: req.user,
        groupName: data.name,
        numOfMembers: data.members.length,
        background: data.background
    });
})

// create group
router.post('/', async (req, res) => {
    try {
        let data = await groupService.createGroup(req.user._id, req.body.name, req.body.avatar)
        res.send({
            data: data,
            status: 'success',
            msg: 'OK'
        })
    } catch (e) {
        res.status(400).send({
            status: 'error',
            msg: e
        });
    }
})

// join group
router.post('/:groupId', async (req, res) => {
    try {
        await groupService.joinGroup(req.user._id, req.params.groupId)
        res.send({
            status: 'success',
            msg: 'OK'
        })
    } catch (e) {
        res.status(400).send({
            status: 'error',
            msg: e
        });
    }
})

// rời group
router.delete('/:groupId', async (req, res) => {
    try {
        await groupService.outGroup(req.user._id, req.params.groupId)
        res.send({msg: 'OK'})
    } catch (e) {
        res.status(400).send({
            status: 'error',
            msg: e
        });
    }
})



module.exports = router;
