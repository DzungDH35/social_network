const router = require('express').Router();
const Post = require('../models/post');
const postService = require('../services/postService')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
require('dotenv').config();


router.get('/home/:page', async (req, res) => {
    try {
        let postList = await postService.getPostsInHome(req.user._id, req.params.page);
        let html = await ejs.renderFile(path.join(process.cwd(), '/views/post.ejs'),
            {
                postList: postList,
                user: req.user
            })
        console.log(html)
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
        await postService.createPost(
            req.user._id,
            req.body.content,
            req.body.img,
            req.body.groupId
        )
        res.send({msg: 'OK'})
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router;

