const { usersModel } = require("../../models/users");

const currentUser = async (req, res, next) => {
  const { email, token, name } = req.user;
  res.json({
    token,
    email,
    name,
  });
};
module.exports = currentUser;
