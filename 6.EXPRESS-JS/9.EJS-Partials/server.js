const express = require("express");
const path = require("path");
const app = express();
//! =================================
//? === SERVE THE STATIC FILE ===
//! =================================

app.use(express.static(path.join(__dirname, "public")));

//! Set the view engine
app.set("view engine", "ejs");

//! Set the views directory (if it's not in the default location)
app.set("views", path.join(__dirname, "views"));

//! Create PORT
const PORT = process.env.PORT || 8082;

//Render Home page/route
app.get("/", (req, res) => {
  res.render("home");
});
//Render About page/route
app.get("/about", (req, res) => {
  res.render("about");
});
//Render Contact page/route
app.get("/contact", (req, res) => {
  res.render("contact");
});
//Render Gallery page/route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

//!Start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
