const Group = require('../models/group');
const User = require('../models/user');
const Post = require('../models/post');
const mongoose = require('mongoose')
module.exports = {

    createGroup: async (userId, name, img) => {
        try {
            await Group.create({
                name: name,
                admin: userId,
                img: img,
                members: userId
            })
        } catch (e) {
            throw e
        }
    },

    addJoinGroupRequest: async (userId, groupId) => {
        try {
            let group = await Group.findById(groupId);
            let req = {
                from: userId,
                toGroup: groupId
            }
            await User.findByIdAndUpdate(group.admin, {
                $addToSet: {
                    joinGroupRequests: req
                }
            })
        } catch (e) {
            throw e
        }
    },

    joinGroup: async (userId, groupId) => {
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

    delJoinGroupReq: async (userId, groupId) => {
        try {
            let group = await Group.findById(groupId);
            await User.findByIdAndUpdate(group.admin, {
                $pull: {
                    joinGroupRequests: {
                        from: mongoose.Types.ObjectId(userId)
                    }
                }
            })
        } catch (e) {
            throw e
        }
    },

    getAllJoinGroupRequests: async (admin) => {
      try {
          return await User.findById(admin);
      }  catch (e) {
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
