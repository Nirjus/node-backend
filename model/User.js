const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required:[true, "Email is required"],
    },

    password:{
        type: String,
       
        required: [true, "Password is required"]
    },
    isAdmin:{
     type: Boolean,
     default: false,
    },
    timeline:[
        {
            title: String,
            description: [
              {
              type: String,
              },
            ],
            date: Date,
            image:{
                public_id:String,
                url: String,
            },
            company: String
        }
    ],

    skills:{
        image1: {
            public_id: String,
            url: String,
          },
      
          image2: {
            public_id: String,
            url: String,
          },
          image3: {
            public_id: String,
            url: String,
          },
          image4: {
            public_id: String,
            url: String,
          },
          image5: {
            public_id: String,
            url: String,
          },
          image6: {
            public_id: String,
            url: String,
          },
          image7: {
            public_id: String,
            url: String,
          }, 
          image8: {
            public_id: String,
            url: String,
          }, 
          image9: {
            public_id: String,
            url: String,
          }, 
          image10: {
            public_id: String,
            url: String,
          },
        },
    achivements:[
        {
            url: String,
            title: String,
            image:{
                public_id:String,
                url: String,
            }
        }
    ],
    projects:[
        {
            url: String,
            title: String,
            image:{
                public_id:String,
                url: String,
            },
           description: String,
           technology: String,
        }
    ],
    about:{
        title: String,
        subtitle: String,
        description: String,
        name: String,
       avatar:{
        public_id:String,
        url: String,
       },
    }
}, {timestamps: true})

const User = mongoose.model("Users", userSchema);

module.exports = User;