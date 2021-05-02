const User = require('../models/user')
const Major = require('../models/major')
const School = require('../models/school')
const mailService = require('./mailService')
const schoolService = require('./schoolService')
const faker = require('faker')
module.exports = {

    createUser: async (obj) => {
        try {
            let res = await schoolService.getMajorAndSchoolByCode(obj.major);
            obj.major = res.major;
            obj.school = res.school;
            let user = new User(obj);
            return await user.save();
        } catch (e) {
            console.log(e);
        }
    },

    login: async (email, pwd) => {
        try {
            let user = await User.findOne({'email': email});
            if (!user) return null;
            if (user.comparePwd(pwd)) return user;
            return null;
        } catch (e) {
            console.log(e);
        }
    },

    // gửi lời mời kết bạn từ 'from' tới 'to'
    sendAddFriendRequest: async (from, to) => {
        let user = await User.findById(to);
        user.addFriendRequest.push(from);
        user.save()
    },

    // đồng ý lời mời kết bạn từ 'from' đến 'to'
    addFriend: async (from, to) => {
        // thêm 'to' vào list frs của 'from'
        try {
            await User.findByIdAndUpdate(from, {
                $addToSet: {
                    friends: to
                }
            });
            // thêm 'from' vào list friends của 'to' và xóa lời mời từ 'from'
            await User.findByIdAndUpdate(to, {
                $addToSet: {
                    friends: from
                }
            });
        } catch (e) {
            console.log(e);
        }
    },

    // từ chối lời mời kết bạn
    delAcceptAddFriend: async (from, to) => {
        try {
            // xóa request kết bạn
            User.findByIdAndUpdate(to, {
                $pull: {
                    addFriendRequest: from
                }
            });
        } catch (e) {
            console.log(e);
        }
    },

    getUserById: async (id) => {
        try {
            let user = await User.findById(id).populate('major').populate('school');
            return user;
        } catch (e) {
            console.log(e)
        }
    },

    changePassword: async (id, newPwd) => {
        try {
            let user = await User.findById(id);
            user.pwd = newPwd;
            user.save();
        } catch (e) {
            console.log(e);
        }
    },

    sendResetPwdId: async (email) => {
        try{
            let user = await User.findOne({email: email});
            if (user === null) return null;
            let resetPwdId = faker.datatype.uuid();
            user.resetPwdId = resetPwdId;
            await user.save();
            mailService.sendMail(email, resetPwdId);
            return 'OK';
        } catch (e) {
            console.log(e)
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
            console.log(e)
        }
    }

}
