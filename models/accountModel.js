const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    doge: {
        type: Number,
        default: 0
    },
    usdt: {
        type: Number,
        default: 0
    },
    ethereum: {
        type: Number,
        default: 0
    },
    bnb: {
        type: Number,
        default: 0
    },
    litecoin: {
        type: Number,
        default: 0
    },
    bitcoin: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Account', accountSchema)