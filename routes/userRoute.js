const express = require("express");
const {
  loginController,
  logoutController,
  getUser,
  myProfile,
  contact,
  updateUser,
  addTimeline,
  addAchivements,
  addProject,
  deleteTimeline,
  deleteProject,
  deleteAchivement,
} = require("../controller/userController");
const {  isAdmin } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.put("/login",loginController);
userRouter.put("/logout",isAdmin, logoutController);
userRouter.get("/users", getUser);
userRouter.get("/me",isAdmin, myProfile);
userRouter.put("/admin/update", isAdmin, updateUser);
userRouter.post("/admin/timeline/add", isAdmin, addTimeline);
userRouter.post("/admin/achivements/add", isAdmin, addAchivements);
userRouter.post("/admin/projects/add", isAdmin, addProject);

userRouter.delete("/admin/timeline/:id", isAdmin, deleteTimeline);
userRouter.delete("/admin/project/:id", isAdmin, deleteProject);
userRouter.delete("/admin/achivements/:id", isAdmin, deleteAchivement);

userRouter.post("/contact", contact);

module.exports = { userRouter };
