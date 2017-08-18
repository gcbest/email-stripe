const mongoose = require('mongoose');
// Mongoose requires us to let it know all the properties to expect
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
});

// Telling mongoose we want to create a new collection called 'users'
mongoose.model('users', userSchema);