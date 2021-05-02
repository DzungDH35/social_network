const router = require('express').Router();
const Post = require('../models/post');
const postService = require('../services/postService')
require('dotenv').config();


router.get('/home/:page', async (req, res) => {

})

router.get('/:group/:page', async (req, res) => {
    
})

router.get('/:mssv/:page', async (req, res) => {

})
module.exports = router;

