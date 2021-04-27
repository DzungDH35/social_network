const User = require('../models/user')
const Major = require('../models/major')
const School = require('../models/school')
module.exports = {
    saveUser: async (obj) => {
        try {
            let user = new User(obj);
            let savedUser = await user.save();
            return savedUser;
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

    sendAddFriendRequest: async (from, to) => {

    },

    getUserByMSSV: async (mssv) => {
        try {
            let user = await
                User.findOne({'mssv': mssv}).select('name')
                    .populate('major', 'name')
                    .populate('school', 'name');
            return user;
        } catch (e) {
            console.log(e)
        }
    }

}
