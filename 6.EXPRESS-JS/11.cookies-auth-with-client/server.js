//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path"); // Import the path module

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 3000;

//! Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//! Set the view engine

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

//! Simulated Database of users

const users = [
  {
    username: "john",
    password: "123",
    role: "admin",
    email: "john@example.com",
  },
  {
    username: "sarah",
    password: "456",
    role: "user",
    email: "sarah@example.com",
  },
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
    const { username, password } = req.body;
    return user.username === username && user.password === password;
  });

  if (userFound) {
    //! set the last login time
    userFound.lastLogin = new Date().toLocaleString();

    //! create a cookie with the user data
    res.cookie("userData", JSON.stringify(userFound), {
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days expiration
      httpOnly: true,
      secure: false, // true for HTTPS only
      sameSite: "strict", // "strict" for same site only
    });

    //! redirect to the dashboard
    res.redirect("/dashboard");
  } else {
    //! redirect back to login if authentication fails
    res.redirect("/login");
  }
});

//! DASHBOARD ROUTE

app.get("/dashboard", (req, res) => {
  //? grab the user from the cookie
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;
  if (userData) {
    const { username, role, lastLogin, email } = userData;
    //! Render the template
    res.render("dashboard", { username, role, lastLogin, email });
  } else {
    //? redirect to login if no user data found in cookies
    res.redirect("/login");
  }
});

//! LOGOUT ROUTE
app.get("/logout", (req, res) => {
  //? clear the cookie and redirect to login
  res.clearCookie("userData");
  res.redirect("/login");
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
