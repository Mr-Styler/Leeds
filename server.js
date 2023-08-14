const dotenv = require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');
const server = require('./app');

// Establishes Database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true
}).then(() => console.log('DB connection was successful.')).catch(err => console.log(`Error, Couldn't connect to the database`));

// Starts the web server
server.listen(1515, () => console.log(`Server is live and running`));