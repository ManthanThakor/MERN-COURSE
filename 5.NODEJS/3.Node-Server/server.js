//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================

const http = require("http");
// console.log(http);

//! =====================================
//? =====  Define The Handler =====
//! =====================================

const requestHandler = (req, res) => {
  //! send response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from Node.js Server\n");
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
  console.log(`Server running at http://localhost:${PORT}`);
});
