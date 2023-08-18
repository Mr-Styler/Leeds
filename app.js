const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const fileUpload = require("./utils/fileUpload");

const store = new MongoDBSession({
  uri: process.env.DB_URI,
  collection: "sessions",
});

const userRoute = require("./routes/userRoute");
const accountRoute = require("./routes/accountRoute");
const transactionRoute = require("./routes/transactionRoute");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/appError");

app.use(express.json());
app.use(
  session({
    secret: "CafeRoyale",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
    store,
  })
);

// Allows data transfer in json format
app.use(express.json());

// allows server to be able to read client's cookies
app.use(cookieParser());

// serving static files
app.use(express.static(`${__dirname}/public`));
app.use(fileUpload.uploadImages);

// Test middleware
app.use(
  cors({
    origin: "http://localhost:3000"
    // origin: "https://leeds-frontend.onrender.com"
  })
);

app.use((req, res, next) => {
  console.log("new request received at", req.originalUrl);
  next();
});

app.use("/api/users", userRoute);
app.use("/api/accounts", accountRoute);
app.use("/api/transactions", transactionRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);

module.exports = app;
