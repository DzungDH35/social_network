const School = require('../models/school')
const Major = require('../models/major')
const schema = require('mongoose').Schema
module.exports = {
    getAllMajorWithSchool: async () => {
        try {
            return await Major.find().select('name');
        } catch (e) {
            console.log(e);
        }

    },

    getAllSchoolsWithMajors: async () => {
        try {
            return await School.find().select({_id: 0, name: 1}).populate('majors', {_id: 0, name: 1});
        } catch (e) {
            console.log(e)
        }
    }
}



