const User = require('../models/user')
const Major = require('../models/major')
const School = require('../models/school')
const Group = require('../models/group')
const Post = require('../models/post')
const followService = require('./followService')
const mailService = require('./mailService')
const schoolService = require('./schoolService')
const groupService = require('./groupService')
const mongoose = require('mongoose')
const faker = require('faker')
module.exports = {

    register: async (email, name, pwd, birthDay, avatar, gender, mssv, code) => {
        try {
            let major = await Major.findOne({code: code});
            let school = await School.findById(major.school);
            let mGroup = await Group.findById(major.group);
            let sGroup = await Group.findById(school.group);
            let newUser = await User.create({
                email: email,
                name: name,
                pwd: pwd,
                birthDay: birthDay,
                avatar: avatar,
                gender: gender,
                mssv: mssv,
                major: major._id,
                school: school._id,
                following: [],
                followers: []
            })

            // join vào group của viện và ngành
            await groupService.joinGroup(newUser._id, mGroup._id);
            await groupService.joinGroup(newUser._id, sGroup._id);

            // follow những thằng trong cùng ngành và ngược lại
            for (let m of mGroup.members) {
                await followService.follow(newUser._id, m)
                await followService.follow(m, newUser._id)
            }

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

    getProfile: async (id) => {
        try {
            return await User.findById(id).populate('major').populate('school').populate('following');
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
