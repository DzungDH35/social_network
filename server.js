const express = require('express')
const app = express()
const path = require('path');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
})

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'heheboiz';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/public')))
app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new JwtStrategy(jwtOptions, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.use('/', require('./client/client'));
app.use('/api', require('./server/api'));

app.listen(process.env.PORT, () => console.log('Server running at http://127.0.0.1:'+ process.env.PORT +'/'))

