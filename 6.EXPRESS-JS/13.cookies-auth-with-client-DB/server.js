const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const path = require("path");

//! INSTANCE
const app = express();

//! create PORT
const PORT = process.env.PORT || 3000;

//! Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//! Set the view engine
app.set("view engine", "ejs");

//! Optional: Set the views directory explicitly
app.set("views", path.join(__dirname, "views"));

//! Connect to mongoose
mongoose
  .connect(
    "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/cookie"
  )
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });

//! CREATE user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
  },
  email: String,
  lastLogin: String,
});

//! compile the schema
const User = mongoose.model("User", userSchema);

// Middleware to check if user is logged in
function checkAuth(req, res, next) {
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;
  if (userData) {
    req.user = userData;
    next();
  } else {
    res.redirect("/login");
  }
}

//! HOME ROUTE
app.get("/", (req, res) => {
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;
  res.render("home", { user: userData });
});

//! LOGIN ROUTE (login form)
app.get("/login", (req, res) => {
  res.render("login");
});

//! LOGIN ROUTE (login logic)
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    //! find the user in db
    const userFound = await User.findOne({ username });

    if (userFound) {
      //! check password
      const isMatch = await bcrypt.compare(password, userFound.password);

      if (isMatch) {
        //! set the last login time
        userFound.lastLogin = new Date().toLocaleString();
        await userFound.save();

        //! create a cookie with the user data
        res.cookie("userData", JSON.stringify(userFound), {
          maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days expiration
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // true for HTTPS only in production
          sameSite: "strict", // "strict" for same site only
        });

        //! redirect to the dashboard
        res.redirect("/dashboard");
      } else {
        //! redirect back to login if password is incorrect
        res.status(400).render("login", { error: "Invalid credentials" });
      }
    } else {
      //! redirect back to login if username is not found
      res.status(400).render("login", { error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
});

//! REGISTER ROUTE (register form)
app.get("/register", (req, res) => {
  res.render("register");
});

//! REGISTER LOGIC (register form)
app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    //? check if the username already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    //? hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //? create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      role: "user",
      email,
    });

    //? save the user to the database
    await newUser.save();

    //? redirect to login after registration
    res.redirect("/login");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

//! DASHBOARD ROUTE
app.get("/dashboard", checkAuth, (req, res) => {
  const { username, role, lastLogin, email } = req.user;
  //! Render the template
  res.render("dashboard", { username, role, lastLogin, email });
});

//! ROBOT DETAILS ROUTE
app.get("/robot-details", checkAuth, (req, res) => {
  res.render("robotDetails");
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
