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

//! Set the view engine
app.set("view engine", "ejs");

//! Set the views directory (if it's not in the default location)
app.set("views", path.join(__dirname, "views"));

//! Create PORT
const PORT = process.env.PORT || 8082;

// Render Home page/Route
app.get("/", (req, res) => {
  res.render("home");
});

// Render About page/Route
app.get("/about", (req, res) => {
  res.render("about");
});

// Render Contact page/Route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Render Gallery page/Route
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

// Render UserData page/Route
app.get("/user", (req, res) => {
  //! Dummy User Content
  const userData = {
    username: "Manthan",
    age: 21,
    isPremiumUser: true,
    email: "Manthu@gmail.com",
    isLogin: true,
  };
  res.render("userData", { userData });
});

// Render Product page/Route

app.get("/products", (req, res) => {
  const products = [
    {
      name: "Laptop",
      price: 999,
      image:
        "https://i.pinimg.com/736x/62/54/9a/62549a16d7478880b2688bada17df22f.jpg",
      description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
    },
    {
      name: "Phone",
      price: 799,
      image:
        "https://images.firstpost.com/wp-content/uploads/2019/09/asus-rog-phone-2-ultimate-edition.jpg?im=FitAndFill=(596,336)",
      description:
        "A smartphone with a stunning display and excellent camera quality.",
    },
    {
      name: "TV",
      price: 1200,
      image:
        "https://media.wired.com/photos/64dab91d10f55482d7159eb4/master/pass/Nanoleaf-4D-Lighting-Kit-Review-Featured-Gear.jpg",
      description: "A 55-inch smart TV with 4K resolution and HDR support.",
    },
  ];
  res.render("products", { products });
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
