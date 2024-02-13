const { httpError } = require("../../helpers");
const { ContactsModel } = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const contact = await ContactsModel.findByIdAndRemove(id);
  if (!contact) {
    throw httpError(404, `Contact with id ${id} not found`);
  }
  res.json({
    code: 200,
      contact,
  });
};

module.exports = removeContact;
