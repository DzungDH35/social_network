const router = require('express').Router();
const Post = require('../models/post');
const postService = require('../services/postService')
require('dotenv').config();


router.get('/home/:page', async (req, res) => {
    try {
        let postList = await postService.getPostsInHome(req.user._id, req.params.page);
        res.send(postList)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/group/:groupId/:page', async (req, res) => {
    try {
        let result = await postService.getPostsInGroups(req.params.groupId, req.params.page);
        res.send(result);
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/profile/:userId/:page', async (req, res) => {
    try {
        let result = await postService.getPostsInProfile(req.params.userId, req.params.page);
        res.send(result);
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {

    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router;

