const router = require('express').Router();
const Post = require('../models/post');
const postService = require('../services/post.service')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
require('dotenv').config();


router.get('/home/:page', async (req, res) => {
    try {
        let postList = await postService.getPostsInHome(req.user._id, req.params.page);
        let html = await ejs.renderFile(path.join(process.cwd(), '/views/postTest.ejs'),
            {
                postList: postList,
                user: req.user
            })
        res.set('Content-Type', 'text/html');
        res.send(html)
    } catch (e) {
        console.log(e)
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
        let r = await postService.createPost(
            req.user._id,
            req.body.content,
            req.body.img,
            req.body.groupId
        )
        res.send({msg: 'OK', r})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/comment', async (req, res) => {
    try {
        let r = await postService.addComment(
            req.body.postId,
            req.user._id,
            req.body.content,
            req.body.img
        )
        res.send({msg: 'OK', r})
    } catch (e) {
        res.status(400).send({
            status: 'error',
            msg: e
        })
    }
})
module.exports = router;

