const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Transaction = require('./../models/transactionModel');

// Reads all Transaction from the database
exports.getAllTransactions = catchAsync(async (req, res, next) => {
    const transactions = await Transaction.find(req.body);

    res.status(200).json({
        status: 'success',
        results: transactions.length,
        payload: {
            transactions
        }
    })
});

// Reads Onky one Transaction from database
exports.getTransaction = catchAsync(async (req, res, next) => {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
        return next(new AppError('No Transaction found with this Id.'))
    }

    res.status(200).json({
        status: 'success',
        payload: {
            transaction
        }
    })
});

// create a transaction
exports.createTransaction = catchAsync(async (req, res, next) => {
    const newTransaction = await Transaction.create(req.body)

    res.status(201).json({
        type: 'success',
        payload: {
            transaction: newTransaction
        }
    })
})

exports.getMyTransaction = catchAsync(async (req, res, next) => {
    const userId = req.user._id;
    const transactions = await Transaction.find({userId});

    res.status(200).json({
        status: 'success',
        payload: {
            transactions
        }
    })
})

// Updates one Transaction in the Database
exports.updateTransaction = catchAsync(async (req, res, next) => {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: false
    });

    if (!updatedTransaction) {
        return next(new AppError('No Transaction found with this Id.'))
    }

    res.status(200).json({
        status: 'success',
        payload: {
            updatedTransaction
        }
    })
});

// Deletes a Transaction from the database
exports.deleteTransaction = catchAsync(async (req, res, next) => {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
        return next(new AppError('No Transaction found with this Id.'))
    }

    res.status(200).json({
        status: 'success',
        message: 'successfully deleted Transaction'
    })
});