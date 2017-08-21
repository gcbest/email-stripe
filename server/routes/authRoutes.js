const passport = require('passport');

module.exports = (app) => {
    // when user hits this route they will be sent to passport authentication flow
    app.get('/auth/google', passport.authenticate('google', {
        // what infomation we want to pull from the user's profile
        scope: ['profile', 'email']
    }));

    // the returned url has the code from google in it now
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout(); // destroys the user's cookie
        res.redirect('/');

    });
};

