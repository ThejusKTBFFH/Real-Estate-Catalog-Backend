const router = require('express').Router();
const {isAuthenticated} = require('../middlewares/auth.js');

const User = require('../model/user.js');

router.get('/userdetails/:id', async(req,res)=>{
    try{
        const {id: userId} = req.params;
        const userProperties = await User.find({_id:userId}).populate("properties").sort({createdAt: -1})

        if(!userProperties){
            return res.status(400).json({
                success:false,
                message: "add some properties"

            })
        }

        if(userProperties){
            res.status(200).json({
                success: true,
                userProperties: userProperties
            })
        }
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router