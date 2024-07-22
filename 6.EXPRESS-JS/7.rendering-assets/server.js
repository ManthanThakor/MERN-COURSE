//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const path = require("path");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! =================================
//? === SERVE THE STATIC FILE ===
//! =================================

app.use(express.static(path.join(__dirname, "public")));

//! create PORT
const PORT = process.env.PORT || 8082;

//! Render Home page/Route

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

//! Render About page/Route

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

//! Render Contact page/Route

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

//! Render Gallery page/Route

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "gallery.html"));
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
