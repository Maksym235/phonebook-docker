const { httpError } = require("../../helpers");
const { usersModel } = require("../../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = process.env;
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usersModel.findOne({ email: email });
  if (!user || !user.verify) {
    throw httpError(404, "User not found");
  }
  const comparePass = bcrypt.compareSync(password, user.password);
  if (!comparePass) {
    throw httpError(404, "Password not equal");
  }
  const { _id: id } = user;

  const payload = {
    id: id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "3d" });
  const loginedUser = await usersModel.findByIdAndUpdate(user.id, {
    token: token,
  });
  console.log(token);
  console.log(loginedUser);
  res.json({
    code: 200,
    message: `login successful`,
    token,
    user,
  });
};

module.exports = login;
