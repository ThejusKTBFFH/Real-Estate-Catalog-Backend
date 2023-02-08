const router = require("express").Router()
const User = require("../model/user")

router.get("/userdetails/:id",async(req,res)=>{
try{
const {id : userId} = req.params;
const userProperties = await User.find({_id : userId}).populate("properties").sort({createdAt:-1})

if(!userProperties){
    return res.status(400).json({
        success: false,
        message:"add some properties"
    })
}

 if(userProperties){
        res.status(200).json({
            success:true,
            userProperties:userProperties
        })
    }
}catch(e){
    res.status(500).json({
        success:false,
        message:e.message
    })
}
});

module.exports =router;