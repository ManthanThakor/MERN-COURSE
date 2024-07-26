//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
// https://www.npmjs.com/package/validator
//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 5000;

const Url = "YOUR MONGO DB KEY Third-Party-Validator";

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
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [30, "Username must be at most 30 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (v) => validator.isEmail(v),
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [0, "Age must be a positive number"],
      max: [120, "Age must be less than or equal to 120"],
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
      username: "Devil",
      email: "john.doe@gmail.com",
      age: 25,
    });
    console.log("User created successfully:", userCreated);
  } catch (error) {
    console.error("Error creating user:", error.message);
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
