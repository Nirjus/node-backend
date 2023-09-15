const jwt = require("jsonwebtoken");
const User = require("../model/User");


const isAdmin = async (req, res, next) => {
    try {
         
          const user = await User.findOne();

          if(user.isAdmin === false){
            return res.status(400).json({
                success: false,
                message: "You are not allow to access this resorces"
            })
          }
          req.user = user;
         
        next();
    } catch (error) {
        next(error);
    }
    }

module.exports = {
    
    isAdmin
}