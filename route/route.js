const router = require("express").Router()
const bcrypt = require("bcrypt");
const userModel = require("../model/user");

router.post("/login", async(req,res)=>{
    try {
        const {email,password} = req.body
        // console.log(email,password);

        const newPassword = await bcrypt.hash(password,10)
        const allUser = await userModel.create({
            email:email,
            password:newPassword
        })
        res.json({
            status:"success",
            allUser
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = router