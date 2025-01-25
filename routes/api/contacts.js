// const express = require("express");
// const ctrlContact = require("../../controllers/contacts");
// const router = express.Router();

// router.get("/", ctrlContact.get);
// router.get("/:contactId", ctrlContact.getById);
// router.post("/", ctrlContact.create);
// router.put("/:contactId", ctrlContact.update);
// router.delete("/:contactId", ctrlContact.remove);
// router.patch("/:contactId/status", ctrlContact.updateStatus);

// module.exports = router;

const express = require("express");
const ctrlContact = require("../../controllers/contacts");
const auth = require("../../controllers/user").auth; // Zaimportowanie funkcję auth z kontrolera user.js
const router = express.Router();

// Trasy z autoryzacją
router.get("/", auth, ctrlContact.get); // Zastosowanie auth jako middleware
router.get("/:contactId", auth, ctrlContact.getById);
router.post("/", auth, ctrlContact.create);
router.put("/:contactId", auth, ctrlContact.update);
router.delete("/:contactId", auth, ctrlContact.remove);
router.patch("/:contactId/status", auth, ctrlContact.updateStatus);

module.exports = router;
