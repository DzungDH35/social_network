const Post = require('../models/post');
const mongoose = require('mongoose')
module.exports = {

    // lấy vài post để đưa lên trang chủ
    getPostsInHome: async (userId, pageNumber) => {
        try {
            return await
                Post.find({usersCanSee: mongoose.Types.ObjectId(userId)})
                    .populate('owner', 'name')
                    .populate('group', 'name')
                    .select('content img comments reaction group')
                    .sort({updatedAt: -1})
                    .skip(pageNumber - 1)
                    .limit(10);
        } catch (e) {
            console.log(e)
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
                    .limit(10);
        } catch (e) {
            console.log(e)
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
                    .limit(10);
        } catch (e) {
            console.log(e)
        }
    },

    // tạo
    createPost: async (userId, content, img, group) => {
        try {
            await Post.create({
                userId,
                content,
                img,
                group
            })
        } catch (e) {
            console.log(e);
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
            console.log(e);
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
            console.log(e);
        }
    }
}






