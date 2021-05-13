const passport = require('passport');
const User = require('../models/user');
const router = require('express').Router();
const Groups = require('../models/group')
const ejs = require('ejs')

router.get('/', async (req, res) => {
    let data = await User.findById(req.user._id).select({_id: 0}).populate('following', 'name avatar').populate('groups', 'name img');

    res.render('home',{
        user: req.user,
        following: data.following,
        groups: data.groups
    })

})

module.exports = router;
