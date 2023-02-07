const router = require("express").Router()
const bcrypt = require("bcrypt");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken")

//signup
router.post("/signup", async(req,res)=>{
    try {
        const {email,password} = req.body
        // console.log(email,password);
        const existingUser = await userModel.findOne({email:email})
        if(existingUser){
            return res.json({
                message:"User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const result = await userModel.create({
            email:email,
            password:hashedPassword
        })

        const token = jwt.sign({email:result.email, id:result._id}, process.env.MY_JWT)
        res.json({
            status:"success",
            email:result,
            token:token
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

//signin
router.post("/signin",async(req,res)=>{
    try {
        let {email, password} = req.body
        const existingUser = await userModel.findOne({email:email})
        if(!existingUser){
            return res.json({
                message:"Cannot find user"
            })
        }

        const matchPassword = await bcrypt.compare(password,existingUser.password)
        if(!matchPassword)
        {
            return res.json({
                message:"Wrong password"
            })
        }

        const token = jwt.sign({email:existingUser.email, id:existingUser._id}, process.env.MY_JWT)
        res.json({
            status:"success",
            email:existingUser,
            token:token
        })
        
    } catch (error) {
        res.json({
            status:"success",
            message:error.message
        })
    }
})


module.exports = router