// const express = require("express")
// const dotenv = require("dotenv")
// const route = require("../Real-Estate-Catalog-Backend/route/route")
// const connectDB = require("../Real-Estate-Catalog-Backend/database/connectDB")
// const signin = require("../Real-Estate-Catalog-Backend/route/signin")
// const signup = require("../Real-Estate-Catalog-Backend/route/signup")

// const app = express()
// dotenv.config()
// app.use(express.json())
// app.use("/",route)
// app.use("/api/v1",signin)
// app.use("/api/v1",signup)

const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./database/connectDB");
const  signup  = require("./route/signup");
const signin = require("./route/signin");

const app = express();
dotenv.config()
const cors = require("cors");

app.use(cors());
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({extented: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api",signup);
app.use("/api", signin);

app.listen(process.env.PORT, async()=>{
    await connectDB()
    console.log(`App is connected at ${process.env.PORT} port`);
})