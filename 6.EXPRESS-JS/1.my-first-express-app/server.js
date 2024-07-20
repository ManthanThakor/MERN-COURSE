//! =================================
//? === IMPORTS Required modules  ===
//! =================================

const express = require("express");

//! =================================
//? === INSTANCE  ===
//! =================================

const app = express();
// console.log(app);

//! create PORT
const PORT = 8082;

//! DEFINE THE ROUTER HANDLER

app.get("/", (req, res) => {
  console.log("");
  res.send("Hello world");
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
