let mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true, trim: true},
    name: {type: String, required: true, trim: true},
    pwd: {type: String, required: true, trim: true},
    birthDay: {type: Date, require: false},
    avatar: {type: String},
    mssv: {type: String, require: true},
    class: {type: mongoose.Schema.Types.ObjectId, ref: 'Class', require: true},
    school: {type: mongoose.Schema.Types.ObjectId, ref: 'School', require: true},
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('User', userSchema)
