const mongoose = require('mongoose');
const schema = mongoose.Schema;
// reaction
const reactionSchema = new schema({
    owner: {type: schema.Types.ObjectId, ref: 'User', require: true},
    react: {
        type: String,
        enum: ['like', 'love', 'dislike', 'haha', 'sad', 'angry']
    }
},{
    versionKey: false
})

//comment
const commentSchema = new schema({
    // người comment
    owner: {type: schema.Types.ObjectId, ref: 'User', require: true},
    // nội dung comment
    content: {type: String, require: true},
    // ảnh(nếu có)
    img: {type: String},
    // reaction
    reaction: [reactionSchema],
},{
    timestamps: true,
    versionKey: false
})

// bài post
const postSchema = new schema({
    // người post
    owner: {type: schema.Types.ObjectId, ref: 'User', require: true},
    // nội dung
    content: {type: String, require: true},
    // ảnh
    img: {type: String},
    // trong nhóm?
    group: {type: schema.Types.ObjectId, ref: 'Group'},
    // comment
    comments: [commentSchema],
    // reaction
    reactions: [reactionSchema],
    // những người có thể thấy post này
    usersCanSee: [{type: schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('Post', postSchema)
