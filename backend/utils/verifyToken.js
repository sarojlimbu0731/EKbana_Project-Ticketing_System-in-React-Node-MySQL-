const jwt = require("jsonwebtoken");
require("dotenv").config();

const createError = require("./error.js");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403, "token is not valid!"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  //  console.log(req.params.userId)
  verifyToken(req, res, next, () => {
    if (req.user.id == req.query.userId) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id == req.query.userId) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
