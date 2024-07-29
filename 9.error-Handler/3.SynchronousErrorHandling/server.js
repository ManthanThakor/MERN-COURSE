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
  const isError = false;
  try {
    if (isError) {
      throw new Error("synchronous error occurred");
    }
    next(); // pass request to next middleware in the stack
  } catch (err) {
    next(err); // pass error to next middleware in the stack
  }
});

//! Regular Route

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//! custom Error Handling Middleware

app.use((err, req, res, next) => {
  //setting HTTP status code
  console.error(err.stack);
  res.status(err.status || 500);
  res.json({
    error: err.message,
    status: err.status,
    stack: err.stack,
  });
});

//! =================================
//? === start the server ===
//! =================================

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
