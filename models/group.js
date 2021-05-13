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
    // avatar
    img: {type: String, required: true},
    avatar: {type: String, default: 'http://placeimg.com/400/400/tech'},
    // ảnh nền
    background: {type: String, default: 'http://placeimg.com/1000/400/tech'},
    // loại nhóm
    groupType: {
        type: String,
        enum: ['major', 'school', 'normal'],
        default: 'normal'
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Group', groupSchema)
