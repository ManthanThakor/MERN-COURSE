const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./router/postRouter");
const app = express();

//-----Connect DB------

mongoose
  .connect(
    "mongodb+srv://thakormanthan849:HOQnOxugSZFFXWMG@myfirstmongodb.jm4tch7.mongodb.net/mvc-design-pattern"
  )
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });

const PORT = 3000;
//!Configure ejs
app.set("view engine", "ejs");
//! Serve static files from the views directory
app.use(express.static(path.join(__dirname, "views")));

//! Optional: Set the views directory explicitly
app.set("views", path.join(__dirname, "views"));
//!Middlewares
app.use(express.urlencoded({ extended: true }));

//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});

//!---Router----
app.use("/", postRouter);

//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
