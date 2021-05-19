const router = require('express').Router();
const groupService = require('../services/group.service')

router.get('/:groupId', async (req, res) => {
    res.render('group');
})

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
