const { ContactsModel } = require("../../models/contacts");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = {
    ...req.body,
    owner,
  };

  const contact = await ContactsModel.create(newContact);

  res.json({
    code: 201,
    contact,
  });
};

module.exports = addContact;
