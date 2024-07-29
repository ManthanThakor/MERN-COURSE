//! =================================
//? === IMPORTS Required modules ===
//! =================================

const express = require("express");

//! =================================
//? === INSTANCE ===
//! =================================

const app = express();

//! create PORT

const PORT = process.env.PORT || 3000;

//! Simulate an In the Middlewares
app.use((req, res, next) => {
  //! Simulate an error condition
  const isError = true;
  if (isError) {
    const err = new Error("Something went wrong");
    next(err);
  } else {
    next();
  }
});

//! Regular Route

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//! custom Error Handling Middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
