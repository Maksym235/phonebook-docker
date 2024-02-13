const express = require("express");
const router = express.Router();
const { validationDecorator, auth } = require("../middlewares");
const { usersShema } = require("../models/users");

const {
  register,
  login,
  logout,
  currentUser,
  resendVerify,
  verifyEmail,
} = require("../controllers/users");
router.post(
  "/register",
  validationDecorator(usersShema.registerShema),
  register
);

router.get("/verify/:verifyCode", verifyEmail);

router.post(
  "/verify",
  validationDecorator(usersShema.emailSchema),
  resendVerify
);

router.post("/login", validationDecorator(usersShema.loginShema), login);

router.post("/logout", auth, logout);

router.get("/current", auth, currentUser);

module.exports = router;
