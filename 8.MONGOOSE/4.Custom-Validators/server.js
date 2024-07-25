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
  "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/Custom-Validation";

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
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9]+$/.test(value); // only alphanumeric
        },
        message: "Username can only contain alphanumeric character",
      },
    },
    email: {
      type: String,
      required: [true, "Please email is required"],
      validate: {
        validator: (value) => {
          return value.endsWith("@gmail.com");
        },
      },
    },
    age: {
      type: Number,
      required: [true, "Please provide an age"],
      validate: {
        validator: (value) => {
          return value >= 18 && value <= 65;
        },
        message: "Age should be between 18 and 65",
      },
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
