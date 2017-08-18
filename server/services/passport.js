const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// fetching mongoose model class from mongo collection
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);  // using the id assigned by mongo
});

passport.deserializeUser((id, done) => { // user's id is what was passed into the cookie
    User.findById(id).then(user => {
       done(null, user);
    });
});

passport.use(new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback', // where user is sent after they grant the app permission
        proxy: true // to allow the callback to go thru the heroku proxy
    }, (accessToken, refreshToken, profile, done) => {
        // accessToken proves that we have the user's permission to access their profile
        // refreshToken allows us to refresh the user's access token
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        // console.log('profile:', profile);

        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    // record with the ID already exists
                    // call the 'done' callback to tell passport we are ready for it
                    // first arg is error
                    done(null, existingUser);
                } else {
                    // need to create new record
                    new User({ googleId: profile.id})
                        .save()
                        .then(user => done(null, user)) // only want to call done() after user is saved to DB
                }
            });

    })
);

