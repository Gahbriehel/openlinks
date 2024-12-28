const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    street: String,
    apartment: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    isAdmin: Boolean,
})

exports.User = mongoose.model('User', userSchema);
