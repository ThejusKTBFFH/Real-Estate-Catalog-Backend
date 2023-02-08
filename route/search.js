const router = require("express").Router()
const property = require("../model/properties")

router.get("/search/:id", async(req,res)=>{
    try {
        const userList = await property.findOne({ppdId:(req.params.id).toUpperCase()})
        if(!userList){
            return res.status(400).json({
                status:"failed",
                message:"Id not found"
            })
        }

        res.status(200).json({
            status:"success",
            userList
        })
    } catch (error) {
        res.json({
            status:"success",
            message:error.message
        })
    }
})

module.exports = router