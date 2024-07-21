//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 8082;

// Home Route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the main app",
  });
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//? === END ===
