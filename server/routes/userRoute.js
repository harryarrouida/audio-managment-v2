const express = require("express")
const userRoute = express.Router()

const {userRegister, userLogin} = require("../controllers/userController")

userRoute.post('/register', userRegister)
userRoute.post('/login', userLogin)

module.exports = userRoute