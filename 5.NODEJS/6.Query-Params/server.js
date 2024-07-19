//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================

const http = require("http");
const url = require("url");

//! =====================================
//? =====  Define The Handler =====
//! =====================================

const requestHandler = (req, res) => {
  //! Parse the request URL
  const parseURL = url.parse(req.url, true);
  //! Send the response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("HI");
};

//! =====================================
//? =====  Create The Server =====
//! =====================================
const createServer = http.createServer(requestHandler);

//! =====================================
//? =====  Start The Server =====
//! =====================================

const PORT = process.env.PORT || 3000;
createServer.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
