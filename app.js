const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./database/connectDB");
const signup = require("./route/signup");
const signin = require("./route/signin");
const logout = require("./route/logout.js");
const properties = require("./route/properties.js");
const getProperties = require("./route/getProperties");

const search = require("./route/search")




const app = express();
dotenv.config()
const cors = require("cors");

const fileUpload = require('express-fileupload')




const cookieParser = require('cookie-parser')


app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());



app.use("/api", signup);
app.use("/api", signin);
app.use('/', logout);
app.use('/', properties);
app.use('/', getProperties);


app.use(cors());
//const cookieParser = require('cookie-parser')

app.use("/", search)



app.listen(process.env.PORT, async () => {
    await connectDB()
    console.log(`App is connected at ${process.env.PORT} port`);
})