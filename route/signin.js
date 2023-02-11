const express = require('express');
const router = express.Router();
const User = require('../model/user');


router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email,password);
        const user = await User.findOne({email}).select('+password');

        if(!user) {
           return res.status(400).json({
                status: "failed",
                message: 'User does not exits'
            })
        }

        const isMatch = await user.matchPassword(password);
        

        if(!isMatch) {
           return  res.status(400).json({
                success: "failed",
                message: 'Incorrect Password',
            })
        }

        const token = await user.generateToken();
   

        const options = {

            expires: new Date(Date.now() + 15 * 60 * 1000),

     

            httpOnly: true,
        }

        res.status(201).cookie("token", token, options).json({
            success: "success",
            user,
            token,
        })
    } catch (error) {
          res.status(500).json({
            success: "failed",
            message: error.message,
          })
    }
});




module.exports = router