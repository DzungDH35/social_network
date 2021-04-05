const express = require('express')
const app = express()
const path = require('path');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./config/passport')(passport);
require('./config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/public')))
app.use(morgan('dev'));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./client/client'));
app.use('/api', require('./server/api'));

app.listen(process.env.PORT, () => console.log('Server running at http://127.0.0.1:'+ process.env.PORT +'/'))

