const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// extracts cookie data
app.use(
    cookieSession({
        // 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,  // has to be passed in milliseconds
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Make sure Express will serve production assets like main.js or main.css
    // if it doesn't find the route in the defined routes above
    app.use(express.static('client/build'));

    // Express will serve up index.html if it doesn't recognize the route
    const path = require('path');
    // this is the last resort here if the route cannot be found above
    app.get('*', (req, res ) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT);