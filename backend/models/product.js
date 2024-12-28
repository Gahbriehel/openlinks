const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        require: false,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    brand: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    // rating: Number,
    // isFeatured: Boolean,
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

exports.Product = mongoose.model('Product', productSchema);
