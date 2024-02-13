const { httpError } = require("../../helpers");
const { ContactsModel } = require("../../models/contacts");

const toggleFavorite = async (req, res) => {
  const { id } = req.params;
  const toggle = await ContactsModel.findByIdAndUpdate(id, req.body);
  if (!toggle) {
    throw httpError(404, `Contacts with id ${id} not found`);
  }
  res.json({
    code: 200,
    toggle,
  });
};

module.exports = toggleFavorite;
