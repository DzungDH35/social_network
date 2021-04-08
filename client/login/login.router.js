var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res){
    console.log(req.url);
    res.sendFile(path.join(__dirname + '/login.component.html'));
})


module.exports = router;