const Post = require('../models/post');
const User = require('../models/user');
const Group = require('../models/group');
const Comment = require('../models/comment')
const mongoose = require('mongoose')
module.exports = {
    // comment
    addComment: async (postId, cmtOwner, content, img) => {
        try {
            let comment = await Comment.create({
                post: postId,
                owner: cmtOwner,
                content: content,
                img: img
            })
            return await comment.populate('owner', 'name avatar').execPopulate()
        } catch (e) {
            throw e
        }
    },

    getComment: async (postId, page) => {
        try {
            return await 
                Comment.find({post: mongoose.Types.ObjectId(postId)})
                    .populate('owner', 'name avatar')
                    .sort({updateAt: 1})
                    .skip(page-1)
                    .limit(3);
        } catch (e) {
            throw e
        }
    }
}