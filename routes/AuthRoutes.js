const express = require("express");
const { register, VerifyEmail } = require("../controller/AuthController");
const AuthRoutes = express.Router();

AuthRoutes.post("/register", register);
AuthRoutes.post("/verifyemail",VerifyEmail)

module.exports = AuthRoutes