const Major = require('./models/major');
const School = require('./models/school');
const User = require('./models/user');
const Group = require('./models/group');
const Post = require('./models/post');
const postService = require('./services/postService');
const schoolService = require('./services/schoolService');
const userService = require('./services/userService');
const util = require('util');
const faker = require('faker')
const mongoose = require('mongoose');
const ejs = require('ejs')
require('dotenv').config();
require('./config/db');
try {

    let test = async () => {
        let postList = await postService.getPostsInHome('60883244c2f56126d0d7bfa4', 1);
        let html = await ejs.renderFile(__dirname + '/views/postTest.ejs', {postList: postList})
        console.log(html)
    }
    test();

} catch (e) {
    console.log(e)
}



