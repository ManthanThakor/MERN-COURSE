const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

// Debugging: Verify environment variables
console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("PORT:", process.env.PORT);

//! Connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Db connected successfully..."))
  .catch((e) => console.log("Connection error:", e));

//! Middlewares
app.use(express.json()); // Pass incoming JSON data from the user

// CORS
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

//! Routes
app.use("/", router);

// Test route
app.get("/test", (req, res) => {
  res.send("Server is working!");
});

//! Error handler
app.use(errorHandler);

//! Start the server
const PORT = process.env.PORT || 3000; // Fallback to port 3000 if PORT is undefined
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
