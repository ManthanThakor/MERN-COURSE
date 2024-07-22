const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8082;

//!=====================================
//?----BUILT-IN-MIDDLEWARES----
//!=====================================

//! serve static files
// app.use(express.static());
//! pass incoming data
// app.use(express.json());
// app.use(express.urlencoded());

// //Home route
// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.json({
//     message: "Hello from Express.js",
//     name: "John Doe",
//     age: 30,
//     isAdmin: true,
//     hobbies: ["reading", "painting", "cooking"],
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       state: "NY",
//       zip: "10001",
//     },
//   });
// });

//!=====================================
//?----APPLICATION LEVEL MIDDLEWARES----
//!=====================================

// Middleware to parse JSON bodies
app.use(bodyParser.json());

//! dummy data

const book = [
  { id: "1", title: "The Great Gatsby", author: "F.Scott" },
  { id: "2", title: "The Moby Dic", author: "Herman" },
  { id: "3", title: "Invisible", author: "ManthuRocks" },
];

//?----lOGIN details of every request

// Application level middleware
app.use((req, res, next) => {
  console.log(req.body);
  console.log("I am an app level middleware");
  next();
});

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Book API",
  });
});

// Book routes
app.get("/books", (req, res) => {
  res.json(book);
});

app.get("/books/:id", (req, res) => {
  const foundBook = book.find((b) => b.id === req.params.id);
  if (foundBook) {
    res.json(foundBook);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Create book route
app.post("/books", (req, res) => {
  const newBook = {
    id: (book.length + 1).toString(),
    title: req.body.title,
    author: req.body.author,
  };
  book.push(newBook);
  res.json(newBook);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
