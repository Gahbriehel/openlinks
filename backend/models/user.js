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
    street: {
        type: String,
    },
    apartment: {
        type: String,
    },
    city: {
        type: String,
    },
    zip: {
        type: String,
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

exports.User = mongoose.model('User', userSchema);
