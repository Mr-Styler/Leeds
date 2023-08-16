const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./routes/userRoute');
const errorController = require('./controllers/errorController');
const AppError = require('./utils/appError');
const cookieParser = require('cookie-parser')


// Allows data transfer in json format
app.use(express.json());

// allows server to be able to read client's cookies
app.use(cookieParser());

// serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use((req, res, next) => {
    console.log('new request received at', req.originalUrl);
    next()
})


app.use('/api/users', cors(), userRoute);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
});

app.use(errorController)

module.exports = app;