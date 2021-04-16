const router = require('express').Router();
const Post = require('../models/post');

require('dotenv').config();

router.get('/', (req, res) => {
    res.send('OK');
})

module.exports = router;

