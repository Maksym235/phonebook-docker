const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./current");
const verifyEmail = require("./verifyEmail");
const resendVerify = require("./resendVerify");
module.exports = {
  register,
  login,
  logout,
  currentUser,
  verifyEmail,
  resendVerify,
};
