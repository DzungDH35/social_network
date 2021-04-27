const Major = require('./models/major');
const School = require('./models/school');
const User = require('./models/user');
const postService = require('./services/postService');
const schoolService = require('./services/schoolService');
const userService = require('./services/userService');
const util = require('util')
require('dotenv').config();
require('./config/db');

userService.getUserByMSSV('20185555').then(res => console.log(res))






