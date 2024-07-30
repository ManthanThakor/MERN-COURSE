//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2; // Use .v2 for the new Cloudinary API
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Updated syntax for multer-storage-cloudinary
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

//! Load environment variables
dotenv.config();

//! =================================
//? === INSTANCE ===
//! =================================
const app = express();

//! create PORT
const PORT = process.env.PORT || 5000;

//! Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//! Serve static files
app.use(express.static(path.join(__dirname, "public")));
//! =================================
//? === CLOUDINARY CONFIGURATION ===
//! =================================

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

//! =================================
//? === MULTER STORAGE CONFIGURATION ===
//! =================================

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Images-Folder",
    format: async (req, file) => "png", //convert all images to png
    public_id: (req, file) => file.fieldname + "_" + Date.now(),
    transformation: [
      {
        width: 800,
        height: 600,
        crop: "fill", //! crop image to fill the space with the specified dimensions and maintain aspect ratio
      },
    ],
  },
});

//! Configure multer

const upload = multer({
  storage,
  limits: 1024 * 1024 * 5, //5MB limit
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

//! =================================
//? === ROUTES ===
//! =================================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "upload.html"));
});

app.get("/images", async (req, res) => {
  try {
    const files = await File.find({});
    res.render("images", { files });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = new File({ url: req.file.path });
    await file.save();
    res.redirect("/images");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//! Error handling middleware
app.use((err, req, res, next) => {
  if (err) {
    res.status(400).json({ message: err.message });
  } else {
    next();
  }
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, console.log(`Server is up and running on port ${PORT}..`));
