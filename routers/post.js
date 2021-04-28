const router = require('express').Router();
const Post = require('../models/post');

require('dotenv').config();


router.get('/', (req, res) => {
    res.send('OK');
})

router.post('/', (req, res) => {
    
})
module.exports = router;

