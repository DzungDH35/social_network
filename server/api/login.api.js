const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const url = require('url');

router.post('/', function(req, res){
    console.log(req.url);
    console.log(req.body);
    if (req.body.username === 'admin') res.sendFile(path.join(process.cwd(), '/client/home/home.component.html'));
    else res.send('404');
})

module.exports = router;