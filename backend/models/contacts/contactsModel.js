const { model, Schema } = require("mongoose");
const { mongooseError } = require("../../helpers");
const regExpEmail = /^[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
const regExpPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const contacts = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      match: regExpEmail,
    },
    phone: {
      type: String,
      required: true,
      match: regExpPhone,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contacts.post("save", mongooseError);
const ContactsModel = model("contacts", contacts);

module.exports = ContactsModel;
