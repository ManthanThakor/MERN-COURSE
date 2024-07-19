//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================

const http = require("http");
const url = require("url");

//! =====================================
//? =====  Define The Handler =====
//! =====================================

const requestHandler = (req, res) => {
  //pass the url
  const passedUrl = url.parse(req.url, true);
  //Extract query
  const queryParameters = passedUrl.query;
  console.log(queryParameters);
  res.writeHead(200, { "Cotent-Type": "text/pain" });
  res.end(`Welcome`);
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
