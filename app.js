const express = require("express")
const dotenv = require("dotenv")
const route = require("../server/route/route")
const connectDB = require("../server/database/connectDB")

const app = express()
dotenv.config()
app.use(express.json())
app.use("/",route)

app.listen(process.env.PORT, async()=>{
    await connectDB()
    console.log(`App is connected at ${process.env.PORT} port`);
})