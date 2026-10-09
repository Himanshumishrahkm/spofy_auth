const express = require('express');
const cookieParser  = require('cookie-parser')
const cors = require("cors");
require('dotenv').config({quiet:true})
const app = express();
const authRouter = require('../src/routes/auth-routes')

app.use(express.json())
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth/",authRouter);

module.exports = app;