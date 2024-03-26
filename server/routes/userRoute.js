const express = require("express")
const userRoute = express.Router()

const {userRegister, userLogin, UserPlaylists} = require("../controllers/userController")
const isUser = require("../middlewares/UserMiddleware")

userRoute.post('/register', userRegister)
userRoute.post('/login', userLogin)
userRoute.get('/user/playlists', isUser, UserPlaylists)

module.exports = userRoute