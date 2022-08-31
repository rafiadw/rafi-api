// import models
import Contact from "../models/Contact.js";

// function get All Contacts
export const getContacts = async (req, res) => {
  try {
    const Contacts = await Contact.find();
    res.json(Contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function get single Contact
export const getContactById = async (req, res) => {
  try {
    const Contact = await Contact.findById(req.params.id);
    res.json(Contact);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// function Create Contact
export const saveContact = async (req, res) => {
  const Contacts = new Contact(req.body);
  try {
    const savedContact = await Contacts.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// function Update Contact
export const updateContact = async (req, res) => {
  const cekId = await Contact.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const updatedContact = await Contact.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// function Delete Contact
export const deleteContact = async (req, res) => {
  const cekId = await Contact.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const deletedContact = await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
