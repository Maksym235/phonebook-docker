const { usersModel } = require("../../models/users");
const { httpError, sendEmail } = require("../../helpers");

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await usersModel.findOne({ email: email });
  if (!user) {
    throw httpError(400, "User not found");
  }

  if (user.verify) {
    throw httpError(400, "user already verified");
  }

  const verificationData = {
    to: email,
    subject: `Verify Email`,
    html: `<a target="_blank" href="${process.env.PROJECT_URL}/api/users/verify/${user.verifyCode}">Click to verify email</a>`,
  };

  await sendEmail(verificationData);
  res.json({
    message: "Verify email send",
  });
};

module.exports = resendVerify;
