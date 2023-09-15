const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../secret/secret");
const sendMail = require("../middleware/Email");
const cloudinary = require("cloudinary");

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    
  await User.findByIdAndUpdate(
      user.id,
      {isAdmin: true},
      {new: true}
     )

    return res.status(200).json({
        success: true,
        message: "LoggedIn Successfully",
      });
  } catch (error) {
    next(error);
  }
};

const logoutController = async (req, res, next) => {
  try {
     
   const user = req.user;
 
   await User.findByIdAndUpdate(
    user.id,
    {isAdmin: false},
    {new: true}
   )
   
    return res.status(200).json({
        success: true,
        message: "Logout Successfully",
      });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne().select("-password -email");

    res.status(200).json({
      success: true,
      message: "User is return",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const myProfile = async (req, res, next) => {
  try {
    const user = await User.findOne();

    res.status(200).json({
      success: true,
      message: "User is return",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const contact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const userMessage = {
      email,
      subject: "Message ",
      html: `<h3>He I am ${name}. </h3> 
      <h4>My email is ${email}.</h4>
      <h4> My message is: ${message} </h4>`,
    };

    await sendMail(userMessage);

    return res.status(200).json({
      success: true,
      message: "message sent Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await User.findOne();

    const { name, email, password, skills, about } = req.body;

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }

    if (skills) {
      if (skills.image1) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: "portfolio",
        });

        user.skills.image1 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image2) {
        await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
          folder: "portfolio",
        });

        user.skills.image2 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image3) {
        await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
          folder: "portfolio",
        });

        user.skills.image3 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image4) {
        await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
          folder: "portfolio",
        });

        user.skills.image4 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image5) {
        await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
          folder: "portfolio",
        });

        user.skills.image5 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image6) {
        await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
          folder: "portfolio",
        });

        user.skills.image6 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image7) {
        await cloudinary.v2.uploader.destroy(user.skills.image7.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image7, {
          folder: "portfolio",
        });

        user.skills.image7 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image8) {
        await cloudinary.v2.uploader.destroy(user.skills.image8.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image8, {
          folder: "portfolio",
        });

        user.skills.image8 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image9) {
        await cloudinary.v2.uploader.destroy(user.skills.image9.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image9, {
          folder: "portfolio",
        });

        user.skills.image9 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image10) {
        await cloudinary.v2.uploader.destroy(user.skills.image10.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image10, {
          folder: "portfolio",
        });

        user.skills.image10 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }

    if (about) {
      if (about.name) {
        user.about.name = about.name;
      }

      if (about.title) {
        user.about.title = about.title;
      }

      if (about.subtitle) {
        user.about.subtitle = about.subtitle;
      }

      if (about.description) {
        user.about.description = about.description;
      }

      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);

        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "myPortFolio",
        });

        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User updated Successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const addTimeline = async (req, res, next) => {
  try {
    const { title, description, date, company, image } = req.body;
  
    const user = await User.findOne();

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "myPortFolio",
    });

    user.timeline.unshift({
      title,
      description,
      date,
      company,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    
    await user.save();
    res.status(200).json({
      success: true,
      message: "Add to Timeline",
    });
  } catch (error) {
    next(error);
  }
};

const addAchivements = async (req, res, next) => {
  try {
    const { url, title, image } = req.body;

    const user = await User.findOne();

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "myPortFolio",
    });

    user.achivements.unshift({
      url,
      title,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "Add to Achivements",
    });
  } catch (error) {
    next(error);
  }
};

const addProject = async (req, res, next) => {
  try {
    const { url, title, image, description, technology } = req.body;
   
    const user = await User.findOne();
      
    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "myPortFolio",
    });

    user.projects.unshift({
      url,
      title,
      description,
      technology,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "Add to Projects",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteTimeline = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne();

    const timelineImage = user.timeline.find((item) => item._id == id);

    if (timelineImage) {
      await cloudinary.v2.uploader.destroy(timelineImage.image.public_id);
    }

    user.timeline = user.timeline.filter((item) => item._id != id);

    await user.save();
    res.status(200).json({
      success: true,
      message: "Delete from Timeline",
    });
  } catch (error) {
   
    next(error);
  }
};

const deleteAchivement = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findOne();

    const achivement = user.achivements.find((item) => item._id == id);

    if (achivement) {
      await cloudinary.v2.uploader.destroy(achivement.image.public_id);
    }
    user.achivements = user.achivements.filter((item) => item._id != id);

    await user.save();
    res.status(200).json({
      success: true,
      message: "Achivement deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findOne();

    const project = user.projects.find((item) => item._id == id);
    if (project) {
      await cloudinary.v2.uploader.destroy(project.image.public_id);
    }
    user.projects = user.projects.filter((item) => item._id != id);

    await user.save();
    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
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
  deleteAchivement,
  deleteProject,
};
