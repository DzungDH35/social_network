const User = require('../models/user')
const Post = require('../models/post')
const mongoose = require('mongoose')

module.exports = {

    isFriend: async (ida, idb) => {
        try {
            let a = await User.findById(ida);
            return a.friends.includes(idb);
        } catch (e) {
            console.log(e)
        }
    },
    // gửi lời mời kết bạn từ 'from' tới 'to'
    sendAddFriendRequest: async (from, to) => {
        try {
            let user = await User.findById(to)
            if (user.friends.includes(from)) return;
            await User.findByIdAndUpdate(to, {
                $addToSet: {
                    addFriendRequests: from
                }
            })
        } catch (e) {
            throw e
        }

    },

    // đồng ý lời mời kết bạn từ 'from' đến 'to'
    addFriend: async (from, to) => {
        // thêm 'to' vào list friends của 'from'
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

            await Post.updateMany({owner: mongoose.Types.ObjectId(from)}, {
                $addToSet: {
                    usersCanSee: to
                }
            })

            await Post.updateMany({owner: mongoose.Types.ObjectId(to)}, {
                $addToSet: {
                    usersCanSee: from
                }
            })

        } catch (e) {
            throw e
        }
    },

    // từ chối lời mời kết bạn
    delAddFriendReq: async (from, to) => {
        try {
            // xóa request kết bạn
            User.findByIdAndUpdate(to, {
                $pull: {
                    addFriendRequest: from
                }
            });
        } catch (e) {
            throw e
        }
    },




    isRequestToAddFriend: async (from, to) => {
        try {
            let user = await User.findById(to);
            return user.addFriendRequests.includes(from);
        } catch (e) {
            throw e
        }
    },

    getAllAddFriendRequests: async (id) => {
        try {
            let user = await User.findById(id);
            return user.addFriendRequests
        } catch (e) {
            throw e
        }
    }

}
