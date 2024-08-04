const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "your-secret-key",
    (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token invalid or expired" });
      }

      req.user = decoded.id;
      next();
    }
  );
};

module.exports = isAuthenticated;
