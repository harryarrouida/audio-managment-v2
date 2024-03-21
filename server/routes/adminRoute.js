const express = require("express")
const adminRoute = express.Router()

const {adminLogin, adminRegister} = require("../controllers/adminController")
const isAdmin = require("../middlewares/adminMiddleware")

adminRoute.post("/login", adminLogin)
adminRoute.post("/register", isAdmin, adminRegister)

module.exports = adminRoute
