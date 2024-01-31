const asyncHandler = require("express-async-handler");
const contact = require("../models/contactmodel");

//@desc Get all contacts
//@access private
//route GET api/contacts

const getcontact = asyncHandler(async (req, res) => {
  const contacts = await contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Get one contact
//@access private
//route GET api/contacts/:id

const getonecontact = asyncHandler(async (req, res) => {
  const contacts = await contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Id Not found");
  }
  res.status(201).json(contacts);
});

//@desc Create new contact
//@access private
//route POST api/contacts

const createcontact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phno } = req.body;
  if (!name || !email || !phno) {
    res.status(400);
    throw new Error("All fields are mandatory.");
  }
  const con = await contact.create({
    name,
    email,
    phno,
    user_id: req.user.id,
  });
  res.status(202).json(con);
});

//@desc Update contact
//@access private
//route PUT api/contacts/:id

const updatecontact = asyncHandler(async (req, res) => {
  const contacts = await contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Id Not found");
  }
  if (contacts.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission ");
  }
  const updatedContact = await contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc Delete contact
//@access private
//route DELETE api/contacts/:id

const deletecontact = asyncHandler(async (req, res) => {
  const contacts = await contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Id Not found");
  }
  if (contacts.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission ");
  }
  await contact.deleteOne({ contacts });
  res.status(200).json(contacts);
});

module.exports = {
  getcontact,
  getonecontact,
  updatecontact,
  deletecontact,
  createcontact,
};
