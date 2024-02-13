const { usersModel } = require("../../models/users");
const { httpError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verifyCode } = req.params;
  const user = await usersModel.findOne({ verifyCode: verifyCode });
  if (!user) {
    throw httpError(400, "User not found");
  }

  await usersModel.findByIdAndUpdate(user.id, {
    verify: true,
    verifyCode: "",
  });

  res.json({
    code: 200,
    message: `Verification successful`,
  });
};

module.exports = verifyEmail;
