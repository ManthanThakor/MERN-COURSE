//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const path = require("path"); // Import the path module

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 3000;

//! Middlewares

app.use(express.urlencoded({ extended: true }));

//! Set the view engine

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

//! Simulated Database of users

const users = [
  { username: "john", password: "123", role: "admin" },
  { username: "sarah", password: "456", role: "user" },
];

//! HOME ROUTE

app.get("/", (req, res) => {
  res.render("home");
});

//! LOGIN ROUTE (login form)

app.get("/login", (req, res) => {
  res.render("login");
});

//! LOGIN ROUTE (login logic)

app.post("/login", (req, res) => {
  //! find the user login details
  const userFound = users.find((user) => {
    console.log(req.body);
    const { username, password } = req.body;
    return user.username === username && user.password === password;
  });

  //! create some cookies(cookie)
  if (userFound) {
    res.cookie("username", userFound.username, {
      maxAge: 300000,
      httpOnly: true,
    });
    res.redirect("/dashboard");
  }
  //! render the user dashboard
  if (userFound) {
    res.redirect("/dashboard");
  } else {
    res.send("Invalid login credentials");
  }
  //! redirect the user to login page
});

//! Dash-board ROUTE

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

//! Logout Route

app.get("/logout", (req, res) => {
  res.redirect("/login");
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
