import express from "express";
import {
  getContacts,
  getContactById,
  saveContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Route get All Contacts
router.get("/", getContacts);
// Route get single Contact
router.get("/:id", getContactById);
// Route CREATE Contact
router.post("/", saveContact);
// Route UPDATE Contact
router.patch("/:id", updateContact);
// Route DELETE Contact
router.delete("/:id", deleteContact);

export default router;
