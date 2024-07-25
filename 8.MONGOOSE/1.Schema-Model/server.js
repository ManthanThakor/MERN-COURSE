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

const Url = "mongodb://localhost:27017/Mongoose-start";

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

const userProfileSchema = new mongoose.Schema({
  username: String, // string
  age: Number, // number
  birthday: Date, // Date
  isActive: Boolean, // Boolean
  email: String, // string
  hobbies: [String], // array of strings
  objectID: mongoose.Schema.Types.ObjectId, // ObjectId
  address: {
    street: String,
    city: String,
    postaclCode: Number,
  }, // embedded document
  customdata: mongoose.Schema.Types.Mixed, // mixed type
});

//! COMPILE THE SCHEMA TO FROM THE MODEL

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//? === END ===
