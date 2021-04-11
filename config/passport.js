const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
require('dotenv').config();
const user = require('../server/models/user');

const jwtOptions = {
    secretOrKey: process.env.SECRETKEY || 'heheboiz',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, done) => {
    console.log(jwt_payload.id);

    user.findOne({_id: jwt_payload.id})
        .then((user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch(err => done(err, null));
})

module.exports = (passport) => {
    passport.use(strategy);
}