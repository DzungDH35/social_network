const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
    content: {type: String, require: true},
    comment: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}
})