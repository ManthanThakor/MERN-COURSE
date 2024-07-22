//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 8082;

// Home Route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the main app",
  });
});

// users Route

//! Getting all users
app.get("/users", (req, res) => {
  res.json({
    message: "All users Fetched",
  });
});

//! Getting a users

app.get("/users/:id", (req, res) => {
  res.json({
    message: "User Fetched",
  });
});

//! update users

app.get("/users/:id", (req, res) => {
  res.json({
    message: "User Updated",
  });
});

//! delete users

app.get("/users/:id", (req, res) => {
  res.json({
    message: "User Deleted",
  });
});

// Posts Route

//! Getting all users
//! Getting a users
//! update users
//! delete users

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//? === END ===
