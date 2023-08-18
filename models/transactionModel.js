const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        lowercase: true,
        enum: ['doge', 'usdt', 'ethereum', 'bnb', 'litecoin', 'bitcoin']
    },
    time: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['pending', 'successful', 'rejected'],
        default: 'pending'
    }
});

module.exports = mongoose.model('Transaction', transactionSchema)