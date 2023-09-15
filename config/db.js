const mongoose = require("mongoose");
const { mongoURI } = require("../secret/secret");

const connectDB = async () => {
    try {
      await  mongoose.connect(mongoURI)
      console.log(`database is connected : ${mongoose.connection.host}`);

      mongoose.connection.on("error",(err) => {
        console.log(err);
      })
    } catch (error) {
       console.error(error);   
    }
}


module.exports = connectDB;