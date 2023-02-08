const express = require('express');
const router = require('./route');
const Router = express.Router();

router.get('/signout',async (req,res)=>{
    try{
        res.status(200)
        .cookie("token", null,{expires : new Date(Date.now()),httpOnly: true})
        .json({
            success : true,
            message : "Sign Out",
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            message: error.message
        })
    }
})