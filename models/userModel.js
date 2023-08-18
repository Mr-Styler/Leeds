const crypto = require("crypto");
const mongoose = require("mongoose");
const Account = require('./accountModel');
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: [true, `Please enter a first name`],
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, `Please enter your last name`],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: [true, `user must provide an email address`],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    select: false,
    required: [true, `user must have a password`],
  },
  amount: {
    type: Number,
  },
  country: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  accountId: {
    type: mongoose.Types.ObjectId,
    ref: 'Account'
  },
  total_profit: {
    type: Number,
    min: 0,
  },
  bonus: {
    type: Number,
    min: 0,
  },
  referral_bonus: {
    type: Number,
    min: 0,
  },
  total_deposit: {
    type: Number,
    min: 0,
  },
  total_withdrawal: {
    type: Number,
    min: 0,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const userAccount = await Account.create({userId: this._id})

  this.accountId = userAccount._id;
  this.save
  next()
});

// Check if inputed password is correct or not
userSchema.methods.correctPwd = async function (
  candidatePassword,
  userPassword
) {
  return candidatePassword === userPassword;
};

// // checks if password was changed while being logged in
// userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
//     if (this.passwordChangedAt) {
//         const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

//         return JWTTimestamp < changedTimestamp;
//     }

//     return false;
// }

// creates a reset token for forgotten password
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
