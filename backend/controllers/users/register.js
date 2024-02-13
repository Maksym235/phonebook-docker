const { usersModel } = require("../../models/users");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const { httpError, sendEmail } = require("../../helpers");
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await usersModel.findOne({ email: email });
  if (user) {
    throw httpError(409, "User already exists");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const verifyCode = nanoid();
  const newUser = {
    name,
    email,
    password: hashPassword,
    verifyCode,
  };

  const verificationData = {
    to: email,
    subject: "Verification your email address",
    html: `<a target="_blank" href="${process.env.PROJECT_URL}/auth/verify/${verifyCode}">Click to verify email</a>`,
  };

  await sendEmail(verificationData);

  // const { _id: id } = newUser;

  // console.log(newUser);

  // const payload = {
  //   id: id,
  // };
  // const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "3d" });
  //   const registredUser = await usersModel.create({ ...newUser, token});

  const registredUser = await usersModel.create({ ...newUser });

  res.json({
    code: 201,
    message: "User registered successfully",
    user: {
      name: registredUser.name,
      email: registredUser.email,
      _id: registredUser._id,
    },
  });
};

module.exports = register;
