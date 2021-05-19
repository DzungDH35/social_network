const Post = require('../models/post');
const User = require('../models/user');
const Group = require('../models/group');
const Comment = require('../models/comment')
const mongoose = require('mongoose')
module.exports = {

    // lấy vài post để đưa lên trang chủ
    getPostsInHome: async (userId, pageNumber) => {
        try {
            return await
                Post.find({usersCanSee: mongoose.Types.ObjectId(userId)})
                    .populate('owner', 'name avatar')
                    .populate('group', 'name')
                    .select('content img reaction group')
                    .sort({updatedAt: -1})
                    .skip(3*pageNumber - 3)  
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
                    .populate('owner', 'name avatar')
                    .populate('group', 'name')
                    .select('content img reaction group')
                    .sort({updatedAt: -1})
                    .skip(3*pageNumber - 3)
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
                    .populate('owner', 'name avatar')
                    .populate('group', 'name')
                    .select('content img reaction group')
                    .sort({updatedAt: -1})
                    .skip(3*pageNumber - 3)
                    .limit(3);
        } catch (e) {
            throw e
        }
    },

    // lấy vài post vừa đăng gần nhất đưa lên trang home
    getPostsInHomeTop: async (userId, pageNumber) => {
        try {
            return await
                Post.find({owner: mongoose.Types.ObjectId(userId)})
                    .populate('owner', 'name avatar')
                    .populate('group', 'name')
                    .select('content img comments reaction group')
                    .sort({updatedAt: -1})
                    .skip(3*pageNumber - 3)
                    .limit(1);
        } catch (e) {
            throw e
        }
    },

    // tạo
    createPost: async (userId, content, img, groupId) => {
        try {
            let user = await User.findById(userId);
            let group = await Group.findById(groupId);
            let usersCanSee = new Set(user.followers);
            usersCanSee.add(userId)
            if (group !== null) usersCanSee.add(...group.members)
            return await Post.create({
                owner: userId,
                content: content,
                img: img,
                group: groupId,
                usersCanSee: Array.from(usersCanSee)
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

    
}






