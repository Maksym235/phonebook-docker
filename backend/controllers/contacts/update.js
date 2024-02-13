const { httpError } = require("../../helpers");
const { ContactsModel } = require("../../models/contacts");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await ContactsModel.findByIdAndUpdate(id, req.body);
  if (!updatedContact) {
    throw httpError(404, `Contact with id ${id} not found`);
  }
  res.json({
    code: 200,
    updatedContact,
  });
};

module.exports = updateContact;
