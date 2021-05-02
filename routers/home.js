const passport = require('passport');
const User = require('../models/user');
const router = require('express').Router();
const Groups = require('../models/group')
const ejs = require('ejs')
router.get('/', async (req, res) => {
    let data = await User.findById(req.user._id).select({_id: 0}).populate('friends', 'name mssv avatar').populate('groups', 'name img');
    console.log(data);
    res.render('home',{
        user: req.user,
        friends: data.friends,
        groups: data.groups
    })

})

module.exports = router;
