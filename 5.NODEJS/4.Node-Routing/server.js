//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================

const http = require("http");

//! =====================================
//? =====  Define The Handler =====
//! =====================================

const requestHandler = (req, res) => {
  console.log(req.url);
  //! send response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello, World!\n");
};

//! =====================================
//? =====  Create The Server =====
//! =====================================

const server = http.createserver(requestHandler);

//! =====================================
//? =====  Start The Server =====
//! =====================================

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`This server is running on http://localhost:${PORT}`);
});
