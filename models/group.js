const mongoose = require('mongoose');
const schema = mongoose.Schema;

// nhóm
const groupSchema = new schema({
    // tên nhóm
    name: {type: String, require: true},
    // thành viên
    member: [{type: schema.Types.ObjectId, ref: 'User', require: true}],
    // các bài post trong nhóm
    posts: [{type: schema.Types.ObjectId, ref: 'Post'}],
    // ảnh nền nhóm?
    img: {type: String}
},{
    versionKey: false
})

module.exports = mongoose.model('Group', groupSchema)
