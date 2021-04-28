const Post = require('../models/post');

module.exports = {
    createPost: async (userId, content, img, group) => {
        try {
            const result = await Post.create({
                userId,
                content,
                img,
                group
            })
            return result;
        } catch (e) {
            console.log(e);
        }
    },

    modifyContentPost: async (postId, newContent) => {
        try {
            const result = await Post.findByIdAndUpdate(
                postId,
                {
                    'content': newContent
                }
            )
            return result;
        } catch (e) {
            console.log(e);
        }
    },

    addComment: async (postId, owner, content, img) => {
        try {
            const cmt = {
                'owner': owner,
                'content': content,
                'img': img
            }
            const post = await Post.findById(postId);
            post.comments.push(cmt);
            const result = post.save();
            return result;
        } catch (e) {
            console.log(e);
        }
    }
}






