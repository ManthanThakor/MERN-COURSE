//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2; // Use .v2 for the new Cloudinary API
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Updated syntax for multer-storage-cloudinary
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//! Load environment variables
dotenv.config();

//! =================================
//? === INSTANCE ===
//! =================================
const app = express();

//! create PORT
const PORT = process.env.PORT || 5000;

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
  cloudinary: cloudinary,
  params: {
    folder: "your_folder_name", // Change this to the desired folder name in Cloudinary
    format: async (req, file) => "png", // supports promises as well
    public_id: (req, file) => file.originalname.split(".")[0],
  },
});

const upload = multer({ storage: storage });

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, console.log(`Server is up and running on port ${PORT}..`));
