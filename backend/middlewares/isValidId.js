const { isValidObjectId } = require("mongoose");
const { httpError } = require("../helpers");

const isValidId = (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    next(httpError(400, `Invalid id: ${id}`));
  }
  next();
};

module.exports = isValidId;
