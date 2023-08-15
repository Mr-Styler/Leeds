const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    },
    type: {
        type: String,
        enum: ['deposit', 'withdrawal']
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Transaction', transactionSchema)