const { contactsWrapper } = require("../../helpers");
const getAll = require("./getAll");
const addContact = require("./add");
const removeContact = require("./remove");
const updateContact = require("./update");
const toggleFavorite = require("./toggleFavorite");
module.exports = {
  getAll: contactsWrapper(getAll),
  addContact: contactsWrapper(addContact),
  removeContact: contactsWrapper(removeContact),
  updateContact: contactsWrapper(updateContact),
  toggleFavorite: contactsWrapper(toggleFavorite),
};
