let mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {type: String, unique: true, required: true, trim: true},
    name: {type: String, required: true, trim: true},
    pwd_hash: {type: String, required: true, trim: true},
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('User', userSchema)