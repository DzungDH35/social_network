const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    member: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true}],
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    name: {type: String, require: true},
})

module.exports = mongoose.model('Group', groupSchema)