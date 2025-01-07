"use strict";
const passPort = require('passport');
const express = require('express');
const session = require('express-session');
const auth_router = Router();
app.use(session({ secret: "cats" }));
app.use(passPort.initialize());
app.use(passPort.session());
const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
};
auth_router.get('/auth/google', passPort.authenticate('google', { scope: ['email', 'profile'] }));
auth_router.get('/google/callback', passPort.authenticate('google', {
    successRedirect: '/admin',
    failureRedirect: 'auth/failure'
}));
auth_router.get('/auth/failure', (req, res) => {
    res.send('Something went wrong');
});
auth_router.get('/admin', isLoggedIn, (req, res) => {
    res.send('this is the admin side');
});
module.exports = auth_router;
