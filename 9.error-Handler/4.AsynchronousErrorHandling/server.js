//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");
const axios = require("axios");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 3000;

//! Route to fetch posts

app.get("/posts", async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

//! Regular Route

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//! custom Error Handling Middleware

app.use((err, req, res, next) => {
  // check if its an axios error
  if (err.isAxiosError) {
    console.error("Axios error:", err.message);
    if (err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    console.error(`Server error: ${err.message}`);
    res.status(503).json({
      error: "Service Unavailable",
      message: err.message,
    });
  }
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
