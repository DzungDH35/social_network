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
require('dotenv').config();
require('./config/db');
try {

    let register = async (obj) => {
        try {
            let res = await schoolService.getMajorAndSchoolByCode(obj.major);
            obj.major = res.major;
            obj.school = res.school;
            // let user = await User.create(obj);
            let m = await Major.findById(res.major);
            // let s = await School.findById(res.school);
            // await groupService.joinGroup(user._id, m.group);
            // await groupService.joinGroup(user._id, s.group);
            let g = await Group.findById(m.group);
            return g
        } catch (e) {
            console.log(e);
        }
    }

    let x = {
        email: "duc.nm183713@sis.hust.edu.vn",
        name: "Minh Đức",
        pwd: "1234",
        birthDay: "2000-10-28",
        avatar: "https://cdn.fakercloud.com/avatars/brandonflatsoda_128.jpg",
        gender: "male",
        mssv: "201837131",
        major: "IT2"
    }

    register(x).then(r => console.log(r));

} catch (e) {
    console.log(e)
}



