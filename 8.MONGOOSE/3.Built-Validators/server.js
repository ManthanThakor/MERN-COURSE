//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const mongoose = require("mongoose");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 5000;

const Url =
  "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/Validation";

// Connect to MongoDB

const connectToDB = async () => {
  try {
    await mongoose.connect(Url, {
      autoIndex: true, // Ensure indexes are built
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

connectToDB();

//! Design Schema

const userProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Username is required"],
      unique: true,
      minlength: 3,
      maxlength: 15,
      match: /^[a-zA-Z0-9]+$/,
    },
    email: {
      type: String,
      required: [true, "Please email is required"],
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    age: {
      type: Number,
      required: [true, "Please provide an age"],
      min: 18,
      max: 65,
    },
    gender: {
      type: String,
      required: [true, "Please provide a gender"],
      enum: ["Male", "Female", "Other"],
    },
    address: {
      type: String,
      required: [true, "Please provide an address"],
      minlength: 10,
      maxlength: 100,
    },
    hobbies: {
      type: [String],
      required: [true, "Please provide at least one hobby"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Include timestamps for createdAt and updatedAt fields
  }
);

//! COMPILE THE SCHEMA TO FROM THE MODEL

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

//! =================================

const createDoc = async () => {
  try {
    const userCreated = await UserProfile.create({
      username: "johndoe",
      email: "john.doe@example.com",
      age: 25,
      gender: "Male",
      address: "123 Main St, Anytown, USA",
      hobbies: ["Reading", "Gaming"],
    });
    console.log("User created successfully:", userCreated);
  } catch (error) {
    console.error(error);
  }
};

createDoc();

//? ---------------------------------

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//? === END ===
