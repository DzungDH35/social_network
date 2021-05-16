const Major = require('./models/major');
const School = require('./models/school');
const User = require('./models/user');
const Group = require('./models/group');
const Post = require('./models/post');
const postService = require('./services/post.service');
const schoolService = require('./services/school.service');
const userService = require('./services/user.service');
const util = require('util');
const faker = require('faker')
const mongoose = require('mongoose');
const ejs = require('ejs')
require('dotenv').config();
require('./config/db');
try {

    Group.find().then( async gs => {
        let j = 0;
        for (let g of gs) {
            for (let u of g.members) {
                for (let i = 0; i < 4; i++) {
                    let gId = (i === 0 || i === 2)?g._id:null;
                    let img = (i === 0 || i === 2)?faker.internet.avatar():null;
                    await postService.createPost(u._id, faker.lorem.paragraphs(), img, gId)
                    console.log(j++);
                }
            }
        }
    })

} catch (e) {
    console.log(e)
}



