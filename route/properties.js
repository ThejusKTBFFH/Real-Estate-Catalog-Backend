const User = require('../model/user')
const Property = require('../model/properties')
const router = require("express").Router();

const multer = require('multer');






const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET

})

router.post('/property', async (req, resp,next) => {

    
    

        
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        console.log(result);
        try
    {
        const ppd_id = "PPID" +  Math.floor(1000 + Math.random() * 9000);
        const views = parseInt(Math.random() * 10);
        const daysLeft = parseInt(Math.random() * 20);
        const {email} = req.body;
    
        let user = await User.findOne({email});
        const property = await Property.create({
            ppdId: ppd_id, 
            views: views,
            daysLeft: daysLeft,
            // userId:user._id,
            siteImage:result.url,
            ...req.body, // taking all fields from user
        });
    
        
        user.properties.push(property)
        await user.save()
        resp.status(200).json({
            status: "Success",
            property:property,
        })

    } catch (error) {
        resp.status(400).json({
            status: "failed",
            message: error.message
        })
    }
    })

    

});

module.exports = router