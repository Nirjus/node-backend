const { data } = require("../data");
const User = require("../model/User");

const seedUsers = async (req, res, next) => {

    try {
         await User.deleteMany({});

         const user = await User.insertMany(data);

         return res.status(201).json({
            success: true,
            message: "Users are returned Successfully",
            user: user,
         })
    } catch (error) {
        next(error);
    }
}

module.exports= {
    seedUsers
}