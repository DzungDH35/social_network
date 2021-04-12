const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    content: {type: String, require: true},
    createdAt: {type: Date, default: Date.now()}

})

module.exports = mongoose.model('Comment', commentSchema)