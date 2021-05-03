const mongoose = require('mongoose');
const schema = mongoose.Schema;

// nhóm
const groupSchema = new schema({
    // tên nhóm
    name: {type: String, require: true},
    // admin
    admin: {type: schema.Types.ObjectId, ref: 'User'},
    // thành viên
    members: [{type: schema.Types.ObjectId, ref: 'User'}],
    // các bài post trong nhóm
    posts: [{type: schema.Types.ObjectId, ref: 'Post'}],
    // ảnh nền nhóm?
    img: {type: String, required: true},
    // loại nhóm
    groupType: {
        type: String,
        enum: ['major', 'school', 'normal'],
        default: 'normal'
    }
},{
    versionKey: false
})

module.exports = mongoose.model('Group', groupSchema)
