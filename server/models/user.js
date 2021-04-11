let mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true, trim: true},
    name: {type: String, required: true, trim: true},
    pwd: {type: String, required: true, trim: true},
    birthDay: {type: Date, require: false},
    avatar: {type: String},
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('User', userSchema)
