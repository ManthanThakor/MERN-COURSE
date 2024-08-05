const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  // Get the token from the header
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token:", token);

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  // Verify token
  jwt.verify(token, "anyKey", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token invalid or expired" });
    }

    // Save the user into req.user
    req.user = decoded.id;
    next();
  });
};

module.exports = isAuthenticated;
