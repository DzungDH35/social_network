const User = require('../models/user')
const Major = require('../models/major')
const School = require('../models/school')
const Group = require('../models/school')
const Post = require('../models/post')
const mailService = require('./mailService')
const schoolService = require('./schoolService')
const groupService = require('./groupService')
const mongoose = require('mongoose')
const faker = require('faker')
module.exports = {

    register: async (obj) => {
        try {
            let res = await schoolService.getMajorAndSchoolByCode(obj.major);
            obj.major = res.major;
            obj.school = res.school;
            console.log(obj)
            // let user = await User.create(obj);
            let m = await Major.findById(res.major);
            // let s = await School.findById(res.school);
            // await groupService.joinGroup(user._id, m.group);
            // await groupService.joinGroup(user._id, s.group);
            let g = await Group.findById(mongoose.Types.ObjectId(m.group));
            console.log(g)
            return g
        } catch (e) {
            throw e
        }
    },

    login: async (email, pwd) => {
        try {
            let user = await User.findOne({'email': email});
            if (!user) return null;
            if (user.comparePwd(pwd)) return user;
            return null;
        } catch (e) {
            throw e
        }
    },



    getUserById: async (id) => {
        try {
            return await User.findById(id).populate('major').populate('school');
        } catch (e) {
            throw e
        }
    },

    changePassword: async (id, newPwd) => {
        try {
            let user = await User.findById(id);
            user.pwd = newPwd;
            user.save();
        } catch (e) {
            throw e
        }
    },

    sendResetPwdId: async (email) => {
        try {
            let user = await User.findOne({email: email});
            if (user === null) return null;
            let resetPwdId = faker.datatype.uuid();
            user.resetPwdId = resetPwdId;
            await user.save();
            mailService.sendMail(email, resetPwdId);
            return 'OK';
        } catch (e) {
            throw e
        }
    },

    resetPassword: async (newPwd, resetId) => {
        try {
            let user = await User.findOne({resetPwdId: resetId});
            if (user === null) return null;
            user.pwd = newPwd;
            user.resetPwdId = null;
            await user.save();
            return 'OK';
        } catch (e) {
            throw e
        }
    },

    searchByName: async (name) => {
        try {
            return await User.find({name: new RegExp(name, 'i')})
        } catch (e) {
            throw e
        }
    },
}
