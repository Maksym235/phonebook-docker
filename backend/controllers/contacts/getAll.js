const { ContactsModel } = require("../../models/contacts");
const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(owner);
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const resp = await ContactsModel.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  res.json({
    code: 200,
      page,
      limit,
      resp,
  });
};

module.exports = getAll;
