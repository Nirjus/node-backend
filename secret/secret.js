const dotenv = require("dotenv");

dotenv.config({
    path:"./secret/.env"
})

const port = process.env.PORT || "5000";

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/myportfolio";

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const smtpUserName = process.env.SMTP_USERNAME || "";

const smtpPassword = process.env.SMTP_PASSWORD || "";

const cloudinaryAPIKey = process.env.CLOUDINARY_API_KEY;

const cloudinaryAPISecret = process.env.CLOUDINARY_API_SECRET;

const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;


module.exports = {
    port,
    mongoURI,
    jwtSecretKey,
    smtpPassword,
    smtpUserName,
    cloudinaryAPIKey,
    cloudinaryAPISecret,
    cloudinaryCloudName,
}