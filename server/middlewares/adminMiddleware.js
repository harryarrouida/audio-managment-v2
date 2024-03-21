const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const isAdmin = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded._id);
      next()
    } catch (error) {
      res.status(401);
      res.json({
        message: "not authorized"
      })
    }
  }
  if(!token){
    res.status(404)
    res.json({
      message: "token not found"
    })
  }
};

module.exports = isAdmin
