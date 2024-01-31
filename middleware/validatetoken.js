const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler((req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is unauthorized");
      }
      req.user = decoded.user;
      next();
    });
    if (token) {
      res.status(401);
      throw new Error("User is unauthorized or token is missing");
    }
  }
});

module.exports = validateToken;
