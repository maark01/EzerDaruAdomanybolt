"use strict";
const google_passport = require("passport");
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();
google_passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: " http://localhost:8080/auth/google/callback",
    passReqToCallback: true
}, function (request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
google_passport.serializeUser((user, done) => {
    done(null, user);
});
google_passport.deserializeUser((user, done) => {
    done(null, user);
});
