
const User = require("../models/user");
const router = require("express").Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ message: "password doesnt match" });
    }

    
    user = await User.create({email, password});
    res.status(200).json({user});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;