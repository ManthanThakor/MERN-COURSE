const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./router/postRouter");

const app = express();

// // Log all environment variables to check if MONGO_URI is loaded correctly
// console.log("Environment Variables:", process.env);

// // Log the MONGO_URI to check if it's being loaded correctly
// console.log("MONGO_URI:", process.env.MONGO_URI);

//-----Connect DB------
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
