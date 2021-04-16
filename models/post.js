const mongoose = require('mongoose');
const schema = mongoose.Schema;

//bài post
const postSchema = new schema({
    //người post
    owner: {type: schema.Types.ObjectId, ref: 'User', require: true},
    //nội dung
    content: {type: String, require: true},
    comments: [{type: schema.Types.ObjectId, ref: 'Comment'}],
    createdAt: {type: Date, default: Date.now()},
    group: {type: schema.Types.ObjectId, ref: 'Group'}
})

module.exports = mongoose.model('Post', postSchema)