const Joi = require("joi");

const registerShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginShema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

const usersShemas = {
  registerShema,
  loginShema,
  emailSchema,
};

module.exports = usersShemas;
