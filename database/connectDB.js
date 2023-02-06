const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://realestate:realestate@cluster0.prigwpj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Database is connected");
    })
}

module.exports = connectDB;