const express = require("express");
const router = express.Router();
const { shemas } = require("../models/contacts");
const { isValidId, validationDecorator, auth } = require("../middlewares");
const {
  getAll,
  addContact,
  removeContact,
  updateContact,
  toggleFavorite,
} = require("../controllers/contacts");

// all
router.get("/", auth, getAll);

// add
router.post(
  "/add",
  auth,
  validationDecorator(shemas.contactsAddSchema),
  addContact
);

// remove
router.delete("/:id", auth, isValidId, removeContact);

// update
router.put(
  "/:id",
  auth,
  isValidId,
  validationDecorator(shemas.contactsUpdateSchema),
  updateContact
);

// toggleFavorite
router.patch(
  "/:id/favorite",
  isValidId,
  auth,
  validationDecorator(shemas.contactsToggleFavoriteSchema),
  toggleFavorite
);

module.exports = router;
