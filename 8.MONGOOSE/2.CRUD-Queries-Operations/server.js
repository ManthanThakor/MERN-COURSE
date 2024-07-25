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
  "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/MyFirstMongodb";

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
    postalCode: Number,
  }, // embedded document
  customdata: mongoose.Schema.Types.Mixed, // mixed type
});

//! COMPILE THE SCHEMA TO FROM THE MODEL

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

//! =================================
//? ========= CRUD OPERATION ========
//! =================================

//! ---------------------------------
//? ---------- Create DOC -----------
//! ---------------------------------

//? 1) --- .save() ---

// const user = new UserProfile({
//   username: "Thakor Manthan",
//   age: 30,
//   birthday: new Date("1990-07-15"),
//   isActive: true,
//   email: "thakormanthan@gmail.com",
//   hobbies: ["Reading", "Gaming", "Coding"],
//   address: {
//     street: "123 Main St",
//     city: "xsarwe",
//     postalCode: 10001,
//   },
// });

// //! SAVE THE DOCUMENT

// user
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? 2) --- .create() --- (Example usage)

// UserProfile.create({
//   username: "John Doe",
//   age: 25,
//   birthday: new Date("1995-07-15"),
//   isActive: false,
//   email: "john.doe@example.com",
//   hobbies: ["Hiking", "Cooking"],
//   address: {
//     street: "456 Another St",
//     city: "Sample City",
//     postalCode: 20002,
//   },
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? 3) --- insertMany() --- (Example usage)

// UserProfile.insertMany([
//   {
//     username: "Alice",
//     age: 28,
//     birthday: new Date("1993-05-21"),
//     isActive: true,
//     email: "alice@example.com",
//     hobbies: ["Swimming", "Reading"],
//     address: {
//       street: "789 Different St",
//       city: "Another City",
//       postalCode: 30003,
//     },
//   },
//   {
//     username: "Bob",
//     age: 32,
//     birthday: new Date("1989-11-12"),
//     isActive: false,
//     email: "bob@example.com",
//     hobbies: ["Running", "Gaming"],
//     address: {
//       street: "101 Different St",
//       city: "Another City",
//       postalCode: 30004,
//     },
//   },
// ])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//! ---------------------------------
//? ---------- Read DOC -----------
//! ---------------------------------

//? 1) --- find() ---

// UserProfile.find()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? 2) --- findOne() ---

// UserProfile.findOne({ username: "Thakor Manthan" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? 3) --- findById() ---

// UserProfile.findById("66a1f23c7350f96529eb6e9d") // Replace with an actual ID from your database
//   .then((data) => {
//     console.log("User Profile by ID: ", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//? === END ===
