const Post = require('../models/post');
const User = require('../models/user');
const Group = require('../models/group')
const mongoose = require('mongoose')
module.exports = {

    // lấy vài post để đưa lên trang chủ
    getPostsInHome: async (userId, pageNumber) => {
        try {
            return await
                Post.find({usersCanSee: mongoose.Types.ObjectId(userId)})
                    .populate('owner', 'name avatar')
                    .populate('group', 'name')
                    .select('content img comments reaction group')
                    .sort({updatedAt: -1})
                    .skip(pageNumber - 1)
                    .limit(3);
        } catch (e) {
            throw e
        }
    },

    // lấy vài post để đưa lên tường nhà
    getPostsInProfile: async (userId, pageNumber) => {
        try {
            return await
                Post.find({owner: mongoose.Types.ObjectId(userId)})
                    .populate('owner', 'name')
                    .populate('group', 'name')
                    .select('content img comments reaction group')
                    .sort({updatedAt: -1})
                    .skip(pageNumber - 1)
                    .limit(3);
        } catch (e) {
            throw e
        }
    },

    // lấy vài post để đưa lên nhóm
    getPostsInGroups: async (groupId, pageNumber) => {
        try {
            return await
                Post.find({group: mongoose.Types.ObjectId(groupId)})
                    .populate('owner', 'name')
                    .populate('group', 'name')
                    .select('content img comments reaction group')
                    .sort({updatedAt: -1})
                    .skip(pageNumber - 1)
                    .limit(3);
        } catch (e) {
            throw e
        }
    },

    // tạo
    createPost: async (userId, content, img, groupId) => {
        try {
            let user = await User.findById(userId);
            let group = await Group.findById(groupId);
            let usersCanSee = new Set([...user.friends, ...group.members]);
            let post = await Post.create({
                owner: userId,
                content: content,
                img: img,
                group: groupId,
                usersCanSee: usersCanSee
            })
        } catch (e) {
            throw e
        }
    },

    // sửa nội dung
    modifyContentPost: async (postId, newContent, img) => {
        try {
            await Post.findByIdAndUpdate(
                postId,
                {
                    content: newContent,
                    img: (img === null) ? this.img : img
                }
            )
        } catch (e) {
            throw e
        }
    },

    // comment
    addComment: async (postId, cmtOwner, content, img) => {
        try {
            const cmt = {
                owner: cmtOwner,
                content: content,
                img: img
            }
            await Post.findByIdAndUpdate(postId, {
                $push: {
                    comments: cmt
                }
            })
        } catch (e) {
            throw e
        }
    }
}






