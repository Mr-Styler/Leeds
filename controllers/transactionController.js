const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Transaction = require('./../models/transactionModel');

// Reads all Transaction from the database
exports.getAllTransactions = catchAsync(async (req, res, next) => {
    const transactions = await Transaction.find(req.body);

    res.status(200).json({
        status: 'success',
        results: transactions.length,
        data: {
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
        data: {
            transaction
        }
    })
});

// create a transaction
exports.createTransaction = catchAsync(async (req, res, next) => {
// recieve reciept
// console.log('file', req.file)
//     if (req.file) req.body.image = req.file.filename;
//     const imagePath = req.files.image[0].path;

//     const image = imagePath.split('public\\')[1];

//     const userObj = { username, email, image }

//     if (!image) return next(new AppError(`Attached file is not an image`))
// // create transaction

    req.body.userId = req.user._id

    const newTransaction = await Transaction.create(req.body)

    newTransaction.save()

    res.status(201).json({
        type: 'success',
        data: {
            transaction: newTransaction
        }
    })
})

exports.getMyTransactions = catchAsync(async (req, res, next) => {
    const userId = req.user._id;
    const transactions = await Transaction.find({userId});

    res.status(200).json({
        status: 'success',
        data: {
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
        data: {
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