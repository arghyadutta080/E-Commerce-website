const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        maxLength: 8,
    },
    countInStock: {
        type: Number,
        default: 1,
        maxLength: 4,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    imageUrl: [{
        type: String,
        required: true,
    }],
    review: [{
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        comment: {
            type: String,
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product