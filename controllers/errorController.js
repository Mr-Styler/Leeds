const AppError = require("./../utils/appError");

const handleCastErrorDB = err => {
    console.log('CAST ERROR!!!!!!!!!!!!!!!')
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400)
}

const handleDuplicateErrorDB = err => {
    console.log('DUPLI ERROR!!!!!!!!!!!!!!!')
    console.log(err);
    const value = Object.values(err.keyValue)
    const message = `Duplicate field value: ${value}, please use another value!`;
    console.log(message)
    return new AppError(message, 400)
}

const handleValidationErrorDB = err => {
    console.log('VALI ERROR!!!!!!!!!!!!!!!')

    const errors = Object.values(err.errors).map(el => el.message)
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400)
}

module.exports = (err, req, res, next) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Something went wrong'


    if (err.name === 'CastError') err = handleCastErrorDB(err)
    if (err.code === 11000) err = handleDuplicateErrorDB(err)
    if (err._message) {
        if (err._message.split(' ')[1] === 'validation') error = handleValidationErrorDB(err)
    }
    if (err.name === 'JsonWebTokenError') err = handleJWTError(err)
    if (err.name === 'TokenExpiredError') err = handleJWTExpiredError(err)

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
}