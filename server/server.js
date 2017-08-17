const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'google/callback' // where user is sent after they grant the app permission
    }, (accessToken, refreshToken, profile, done) => {
        // accessToken proves that we have the user's permission to access their profile
        // refreshToken allows us to refresh the user's access token
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
    })
);

// when user hits this route they will be sent to passport authentication flow
app.get('/auth/google', passport.authenticate('google', {
    // what infomation we want to pull from the user's profile
    scope: ['profile', 'email']
}));

// the returned url has the code from google in it now
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);