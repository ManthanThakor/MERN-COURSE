//! =====================================
//? =====  IMPORTS Required modules =====
//! =====================================

const http = require("http");
const url = require("url");

//! =====================================
//? =====  Define The Handler =====
//! =====================================

const requestHandler = (req, res) => {
  console.log(req.url);
  //! pass the url
  const passedUrl = url.parse(req.url, true);
  console.log(passedUrl);
  //! Home route
  if (passedUrl.pathname === "/" && req.method === "GET") {
    //! send response
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Welcome to My Simple Server!</h1>
          <p>This is a basic server created using Node.js and HTTP module.</p>
        </body>
      </html>
    `);
    return;
  }

  //! ABOUT route
  else if (passedUrl.pathname === "/about" && req.method === "GET") {
    //! send response
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Welcome to About us section</h1>
          <p>This is a basic server created using Node.js and HTTP module.</p>
               <p>This is About Us SECTION.</p>
        </body>
      </html>
    `);
    return;
  } else {
    //! send 404 response
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Error 404 - Page Not Found</h1>
          <p>The requested URL was not found on this server.</p>
        </body>
      </html>
    `);
    return;
  }
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
  console.log(`This server is running on http://localhost:${PORT}`);
});
