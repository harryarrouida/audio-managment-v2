const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const Admin = require("../models/Admin")

router.post("/login", async (req, res) => {
    const {username, password} = req.body
    try {
        const admin = await Admin.findOne({username})
        if(!admin){ 
            return res.json("Invalid credentials")
        }
        const compareResult = await bcrypt.compare(password, admin.password)
        if(!compareResult){
            return res.json("Invalid credentials")
        }
        const token = jwt.sign({id: admin._id, username: admin.username}, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.json({token})
    } catch (error) {
        console.log("Error: ", error)
    }
})

module.exports = router