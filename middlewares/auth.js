const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const UnauthorizedError = require("../errors/UnauthorizedError");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new UnauthorizedError("Authorization required"));
  }

  try {
    const token = authorization.replace("Bearer ", "");
    console.log("Authorization:", authorization);

    req.user = jwt.verify(token, JWT_SECRET);
    console.log("Decoded user:", req.user);

    return next();
  } catch (err) {
    return next(new UnauthorizedError("Invalid token"));
  }
};
