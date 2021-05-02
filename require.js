const Major = require('./models/major');
const School = require('./models/school');
const User = require('./models/user');
const Group = require('./models/group');
const Post = require('./models/post')
const postService = require('./services/postService');
const schoolService = require('./services/schoolService');
const userService = require('./services/userService');
const util = require('util');
const faker = require('faker');
const mongoose = require('mongoose');
require('dotenv').config();
require('./config/db');
