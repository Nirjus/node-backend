const app = require("./app");
const connectDB = require("./config/db");
const {
  port,
  cloudinaryCloudName,
  cloudinaryAPIKey,
  cloudinaryAPISecret,
  backendUrl,
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

const url = `${backendUrl}/test`; // Replace with your Render URL
const interval = 30000; // Interval in milliseconds (30 seconds)
function reloadWebsite() {
  fetch(url, {
    method: "GET", // Specifies the HTTP method
    headers: {
      "Content-Type": "application/json", // Example of setting headers
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(
          `Reloaded at ${new Date().toISOString()}: Status Code ${
            response.status
          }`
        );
      } else {
        console.error(
          `Failed to reload at ${new Date().toISOString()}: Status Code ${
            response.status
          }`
        );
      }
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

setInterval(reloadWebsite, interval);
