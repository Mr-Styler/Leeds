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
        enum: ['Doge', 'USDT TRC 20', 'Ethereum', 'Bnb', 'Litecoin', 'Bitcoin']
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