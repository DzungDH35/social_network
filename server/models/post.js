const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    content: {type: String, require: true},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    createdAt: {type: Date, default: Date.now()},
    group: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'}
})

module.exports = mongoose.model('Post', postSchema)