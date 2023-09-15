const express = require("express");
const { seedUsers } = require("../controller/seedController");

const seedUser = express.Router();

seedUser.get("/seedUsers",seedUsers);

module.exports = {seedUser}