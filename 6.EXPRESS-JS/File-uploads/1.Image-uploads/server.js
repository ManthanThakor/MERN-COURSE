const path = require("path"); // Move this line up
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, ".env") });
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const PORT = 5000;
const app = express();

// EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static("public"));

// Connect to MongoDB
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log("DB connection error:", e));

// Image schema
const imageSchema = new mongoose.Schema(
  {
    url: String,
    public_id: String,
  },
  {
    timestamps: true,
  }
);

// Model
const Image = mongoose.model("Image", imageSchema);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "images-folder",
    format: async (req, file) => "png",
    public_id: (req, file) => file.fieldname + "_" + Date.now(),
    transformation: [
      {
        width: 800,
        height: 600,
        crop: "fill",
      },
    ],
  },
});

// Configure Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not an image! Please upload an image"), false);
    }
  },
});

// Welcome route
app.get("/", (req, res) => {
  res.render("welcome");
});

// Route for displaying upload form
app.get("/upload-form", (req, res) => {
  res.render("upload");
});

// Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file);
    const uploaded = await Image.create({
      url: req.file.path,
      public_id: req.file.filename,
    });
    res.redirect("/images");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all images
app.get("/images", async (req, res) => {
  try {
    const files = await Image.find();
    res.render("images", { files });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}..`);
});
