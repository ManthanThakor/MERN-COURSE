//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================
const http = require("http");
const url = require("url");
//! =====================================
//? =====  Define The Handler =====
//! =====================================
const requestHandler = (req, res) => {
  const data = {
    id: 123,
    name: "Agnes Appiah",
    email: "agnes@gmail.com",
  };
  //Set the response header to application/json
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

//! =====================================
//? =====  Create The Server =====
//! =====================================
const server = http.createServer(requestHandler);

//! =====================================
//? =====  Start The Server =====
//! =====================================
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
