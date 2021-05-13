const Group = require('../models/group');
const User = require('../models/user');
const Post = require('../models/post');
const mongoose = require('mongoose')
module.exports = {

    createGroup: async (userId, name, img) => {
        try {
            return await Group.create({
                name: name,
                admin: userId,
                img: img,
                members: [userId]
            });
        } catch (e) {
            throw e
        }
    },

    joinGroup: async (userId, groupId) => {
        try {
            await Group.findByIdAndUpdate(groupId, {
                $addToSet: {
                    members: userId
                }
            });

            await User.findByIdAndUpdate(userId, {
                $addToSet: {
                    groups: groupId
                }
            })

            await Post.updateMany({group: groupId}, {
                $addToSet: {
                    usersCanSee: userId
                }
            })
        } catch (e) {
            throw e
        }
    },

    outGroup: async (userId, groupId) => {
        try {
            await Group.findByIdAndUpdate(groupId, {
                $pull: {
                    members: userId
                }
            });
            await User.findByIdAndUpdate(userId, {
                $pull: {
                    groups: groupId
                }
            })
            await Post.updateMany({group: groupId}, {
                $pull: {
                    usersCanSee: userId
                }
            })
        } catch (e) {
            throw e
        }
    },


    searchByName: async (name) => {
        try {
            return await Group.find({name: new RegExp(name, 'i')})
        } catch (e) {
            throw e
        }
    }

}
