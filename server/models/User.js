const mongoose = require('mongoose');
// Mongoose requires us to let it know all the properties to expect
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

// Telling mongoose we want to create a new collection called 'users'
mongoose.model('users', userSchema);