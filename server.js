const express = require('express')
const app = express()
const path = require('path');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const cors = require('cors');
require('dotenv').config();
require('./config/passport')(passport);
require('./config/db');
app.use(cors())

app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/public')))
app.use(morgan('dev'));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./client/client'));
app.use('/api', require('./server/api'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.listen(process.env.PORT, () => console.log('Server running at http://127.0.0.1:'+ process.env.PORT +'/'))

