const express = require("express");
require("dotenv").config();
const AuthRoutes = require("./routes/AuthRoutes")
const mongoose = require("mongoose")
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
app.use("/auth",AuthRoutes)

app.listen(process.env.PORT,()=>{
    console.log("App is running on port", +process.env.PORT)
})