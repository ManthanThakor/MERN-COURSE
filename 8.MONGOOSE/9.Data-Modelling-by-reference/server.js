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

const Url = "YOUR MONGO DB KEY Data-Modelling-by-reference";

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

//! Author Schema

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//! Compile the Author Schema

const Author = mongoose.model("Author", AuthorSchema);

//! Books Schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  pages: Number,
  published: Date,
});

//! Compile the Books Schema

const Book = mongoose.model("Book", BookSchema);

//! Create an Author

const createAuthor = async () => {
  try {
    await Author.create({ name: "John Doe", age: 45 });
    console.log("Author created");
  } catch (error) {
    console.log(error);
  }
};

createAuthor();

//! Create a Book

const createBook = async () => {
  try {
    const author = await Author.findOne({ name: "John Doe" });
    if (!author) {
      console.log("Author not found");
      return;
    }
    await Book.create({
      title: "Mern for Beginners",
      author: author._id,
      pages: 300,
      published: new Date(), // Add a published date
    });
    console.log("Book created");
  } catch (error) {
    console.log(error);
  }
};

createBook();

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
