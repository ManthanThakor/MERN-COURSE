//! =================================
//? === IMPORTS Required modules  ===
//! =================================

const express = require("express");

//! =================================
//? === INSTANCE  ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 8082;

//! receiving incoming from the client configuration

app.use(express.json());

//! dummy data

const book = [
  { id: "1", title: "The Great Gatsby", author: "F.Scott" },
  { id: "2", title: "The Moby Dic", author: "Herman" },
  { id: "3", title: "Invisible", author: "ManthuRocks" },
];

//! === ROUTES ===

//* --- home route ---

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the Book API",
  });
});

//* --- Fetch all books ---

app.get("/book", (req, res) => {
  res.json({
    status: "success",
    message: "All books fetch successfully",
    data: book,
  });
});

//* --- Fetch a book ---

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = book.find((book) => book.id === id);
  console.log(bookFound);

  if (!bookFound) {
    return res.status(404).json({
      status: "error",
      message: `Book with id ${id} not found`,
    });
  }
  res.json({
    status: "success",
    message: "Book fetched successfully",
    data: bookFound,
  });
});

//* --- Create a book ---

app.post("/book", (req, res) => {
  console.log(req.body);

  const newPost = req.body;
  book.push(newPost);
  res.json({
    status: "success",
    message: "Book Created successfully",
    data: book,
  });
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
