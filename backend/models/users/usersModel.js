const { model, Schema } = require("mongoose");

const users = new Schema(
  {
    name: {
      type: String,
      required: [true, `Name is required`],
    },
    email: {
      type: String,
      required: [true, `Email is required`],
    },
    password: {
      type: String,
      required: [true, `Password is required`],
    },
    token: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verifyCode: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const usersModel = model("users", users);

module.exports = usersModel;
