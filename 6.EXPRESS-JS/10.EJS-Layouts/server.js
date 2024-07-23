const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate"); // Import ejs-mate
const app = express();

//! =================================
//? === SERVE THE STATIC FILE ===
//! =================================

app.use(express.static(path.join(__dirname, "public")));

//! Set the view engine
app.set("view engine", "ejs");

//! Set the views directory (if it's not in the default location)
app.set("views", path.join(__dirname, "views"));

//! Use ejs-mate for all .ejs files
app.engine("ejs", ejsMate); // Use ejs-mate as the layout engine

//! Create PORT
const PORT = process.env.PORT || 8082;

// Set default layout
app.set("layout", "layout/main-layout");

// Render Home page/route
app.get("/", (req, res) => {
  res.render("home");
});

// Render About page/route
app.get("/about", (req, res) => {
  res.render("about");
});

// Render Contact page/route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Render Gallery page/route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

// 404 Error handler
app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.render("error", { error: err.message });
});

//! Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
