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

const Url = "YOUR MONGO DB KEY Data-Modelling-arrays-embedded";

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

//! student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grades: [Number], // Array of numbers
});

//! classroom

const classroomSchema = new mongoose.Schema({
  ClassName: String,
  students: [studentSchema], // Array of student documents
});

//! Compile the user Schema

const User = mongoose.model("User", classroomSchema);

//! Create a user

const createClass = async () => {
  try {
    const user = new User({
      ClassName: "Maths 101",
      students: [
        { name: "John", age: 12, grades: [85, 90, 95] },
        { name: "Jane", age: 11, grades: [80, 85, 90] },
      ],
    });
    await user.save();
    console.log("Classroom created");
  } catch (error) {
    console.error(error);
  }
};

createClass();

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
