const app = require("./app");
const connectDB = require("./config/db");
const {
  port,
  cloudinaryCloudName,
  cloudinaryAPIKey,
  cloudinaryAPISecret,
} = require("./secret/secret");
const cloudinary = require("cloudinary");

cloudinary.v2.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryAPIKey,
  api_secret: cloudinaryAPISecret,
});

app.listen(port, async () => {
  console.log(`server is running on : http://localhost:${port}`);
  await connectDB();
});
