const Joi = require("joi");

const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  avatar: Joi.string(),
  favorite: Joi.boolean(),
});
const contactsUpdateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  avatar: Joi.string(),
  favorite: Joi.boolean(),
});

const contactsToggleFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  contactsAddSchema,
  contactsToggleFavoriteSchema,
  contactsUpdateSchema,
};

module.exports = schemas;
