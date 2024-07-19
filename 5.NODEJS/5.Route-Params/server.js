//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================

const http = require("http");
const url = require("url");

//! =====================================
//? =====  Define The Handler =====
//! =====================================

const requestHandler = (req, res) => {
  //! parse the url
  const passedURL = url.parse(req.url, true);
  const pathName = passedURL.pathname;
  console.log(pathName);
  //! split the pathName
  const pathComponent = pathName.split("/").filter(Boolean);
  console.log(pathComponent);
  if (pathComponent[0] === "products" && pathComponent[1]) {
    // Take the Product and send to the user
    //perform db query
    const ProductId = pathComponent[1];
    //! Send the response
    res.writeHead(200, { "Content-Type": "text/pai n" });
    res.end(`Product ID ${ProductId}`);
  } else {
    // Send a 404 not found response
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
};

//! =====================================
//? =====  Create The Server =====
//! =====================================

const server = http.createServer(requestHandler);

//! =====================================
//? =====  Start The Server =====
//! =====================================

const PORT = "3000";
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
