const jwt = require("jsonwebtoken");
const { usersModel } = require("../models/users");
const { JWT_SECRET } = process.env;
const { httpError } = require("../helpers");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(httpError(401, "unauthorized 1"));
  }
  try {
    // console.log(token);
    const token2 = jwt.verify(token, JWT_SECRET);
    // console.log(jwt.verify(token, JWT_SECRET));
    const user = await usersModel.findById(token2.id);
    console.log("user", user);
    // console.log("user token", user.token);
    // console.log("token", token);
    if (!user || !user.token) {
      next(httpError(401, "unauthorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(httpError(401, error.message));
  }
};

module.exports = auth;
