const express = require("express")
const dotenv = require("dotenv")
const route = require("../Real-Estate-Catalog-Backend/route/route")
const connectDB = require("../Real-Estate-Catalog-Backend/database/connectDB")

const app = express()
dotenv.config()
app.use(express.json())
app.use("/",route)

app.listen(process.env.PORT, async()=>{
    await connectDB()
    console.log(`App is connected at ${process.env.PORT} port`);
})