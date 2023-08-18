const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Account = require('./../models/accountModel');

// Reads all Account from the database
exports.getAllAccounts = catchAsync(async (req, res, next) => {
    const accounts = await Account.find(req.body);

    res.status(200).json({
        status: 'success',
        results: accounts.length,
        data: {
            accounts
        }
    })
});

// Reads Onky one Account from database
exports.getAccount = catchAsync(async (req, res, next) => {
    const account = await Account.findById(req.params.id);

    if (!account) {
        return next(new AppError('No Account found with this Id.'))
    }

    res.status(200).json({
        status: 'success',
        data: {
            account
        }
    })
});

// create a Account
exports.createAccount = catchAsync(async (req, res, next) => {
    const newAccount = await Account.create(req.body)

    res.status(201).json({
        type: 'success',
        data: {
            account: newAccount
        }
    })
})

exports.getMyAccount = catchAsync(async (req, res, next) => {
    const userId = req.user._id;
    const account = await Account.findOne({userId});

    res.status(200).json({
        status: 'success',
        data: {
            account
        }
    })
})

// Updates one Account in the Database
exports.updateAccount = catchAsync(async (req, res, next) => {
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: false
    });

    if (!updatedAccount) {
        return next(new AppError('No Account found with this Id.'))
    }

    res.status(200).json({
        status: 'success',
        data: {
            updatedAccount
        }
    })
});

// Deletes a Account from the database
exports.deleteAccount = catchAsync(async (req, res, next) => {
    const account = await Account.findByIdAndDelete(req.params.id);

    if (!account) {
        return next(new AppError('No Account found with this Id.'))
    }

    res.status(200).json({
        status: 'success',
        message: 'successfully deleted Account'
    })
});