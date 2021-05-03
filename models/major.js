const mongoose = require('mongoose');
const schema = mongoose.Schema;


// model chuyên ngành (IT2, IT-E15,...)
const majorSchema = new schema({
    // tên
    name: {type: String, require: true},
    // mã ngành
    code: {type: String, require: true},
    // viện (viện CNTT&TT)
    school: {type: schema.Types.ObjectId, ref: 'School'},
    // danh sách sinh viên
    student: [{type: schema.Types.ObjectId, ref: 'User'}],
},{
    versionKey: false
})

module.exports = mongoose.model('Major', majorSchema);
