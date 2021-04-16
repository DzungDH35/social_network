const mongoose = require('mongoose');
const schema = mongoose.Schema;

//comment trong các post
const commentSchema = new schema({
    //post chứa comment
    post: {type: schema.Types.ObjectId, ref: 'Post'},
    //người comment
    owner: {type: schema.Types.ObjectId, ref: 'User', require: true},
    //nội dung comment
    content: {type: String, require: true},
    //thời điểm comment
    createdAt: {type: Date, default: Date.now()},
    //reaction
    reaction: [{type: schema.Types.ObjectId, ref: 'React'}],
    //ảnh(nếu có)
    img: {type: String}
})

module.exports = mongoose.model('Comment', commentSchema)

