const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageBucketSchema = new schema({
    room: {type: schema.Types.ObjectId, ref: 'Room'},
    messages: [{
        from: {type: schema.Types.ObjectId, ref: 'User'},
        content: {type: String},
        img: {type: String}
    }]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('MessageBucket', messageBucketSchema)