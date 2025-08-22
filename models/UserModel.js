const mongoose = require("mongoose");
require("dotenv").config();


const user_schema = mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    VerificationCode: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", user_schema);

module.exports = {UserModel} ;
