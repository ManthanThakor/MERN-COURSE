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

const mongodbURL = "YOUR MONGO DB KEY getter-setter";

//! 1. Connect to mongodb using mongoose
const connectToDB = async () => {
  try {
    await mongoose.connect(mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb has been connected successfully");
  } catch (error) {
    console.log(`Error connecting to mongodb ${error}`);
  }
};
connectToDB();

//!. Design Our Schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      set: (value) => value.trim(), // Trimming
    },
    author: {
      type: String,
      required: true,
      set: (value) => value.trim(), // Trimming
    },
    price: {
      type: Number,
      required: true,
      set: (value) => Math.round(value * 100) / 100, // Rounding to 2 decimal places
    },
    tags: {
      type: [String],
      required: true,
      set: (value) => value.map((tag) => tag.toLowerCase()), // Convert to lowercase
    },
    url: {
      type: String,
      get: (value) => value, // Update with actual logic if needed
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

//! Compile the schema to create the model
const Book = mongoose.model("Book", bookSchema);

//! Create book
const createBook = async () => {
  try {
    const newBook = await Book.create({
      title: "Mongoose for everyone",
      author: "Masynctech Coding school",
      price: 19.99999,
      tags: ["MONGODB", "NODEJS", "Mongoose"],
      url: "mongoose-for-everyone",
    });
    console.log(newBook);
  } catch (error) {
    console.log(error);
  }
};
createBook();

const fetchBooks = async () => {
  try {
    const books = await Book.find();
    console.log(books);
  } catch (error) {
    console.log(error);
  }
};
fetchBooks();

// Start the server
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
