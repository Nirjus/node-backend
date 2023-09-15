const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { userRouter } = require("./routes/userRoute");
const { seedUser } = require("./routes/seedRoute");

const app = express();
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended: true, limit:"50mb"}));
app.use(cookieParser());

app.use(cors({
    origin: "https://nirjus.vercel.app",
    credentials: true,
}))

app.use("/api/user", userRouter);
app.use("/api/seed", seedUser);


app.use("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend is running"
    })
})

//  client error
app.use((req, res, next) => {
    next(createError(404, "Route not found"));
})

// server error
app.use((error, req, res, next) => {
    return res.status(error.status || 500).json({
        success: false,
        message: error.message,
    })
})

module.exports = app;