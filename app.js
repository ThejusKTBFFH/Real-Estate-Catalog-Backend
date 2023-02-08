

const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./database/connectDB");
const  signup  = require("./route/signup");
const signin = require("./route/signin");
const logout = require("./route/logout.js");
const properties = require("./route/properties.js");




const app = express();
dotenv.config()
const cors = require("cors");

const fileUpload = require('express-fileupload')



app.use(cors());
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());


app.use(fileUpload({
    useTempFiles:true
}));
app.use("/api",signup);
app.use("/api", signin);
app.use('/', logout);
app.use('/', properties);


app.use(cors());
const cookieParser = require('cookie-parser')



app.listen(process.env.PORT, async()=>{
    await connectDB()
    console.log(`App is connected at ${process.env.PORT} port`);
})