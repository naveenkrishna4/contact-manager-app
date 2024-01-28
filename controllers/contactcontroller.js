const asyncHandler = require("express-async-handler");
const contact = require("../models/contactmodel");

//@desc Get all contacts
//@access public
//route GET api/contacts

const getcontact = asyncHandler(async (req, res) => {
  const contacts = await contact.find();
  res.status(200).json(contacts);
});

//@desc Get one contact
//@access public
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
//@access public
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
  });
  res.status(202).json(con);
});

//@desc Update contact
//@access public
//route PUT api/contacts/:id

const updatecontact = asyncHandler(async (req, res) => {
  const contacts = await contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Id Not found");
  }
  const updatedContact = await contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc Delete contact
//@access public
//route DELETE api/contacts/:id

const deletecontact = asyncHandler(async (req, res) => {
  const contacts = await contact.findByIdAndDelete(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Id Not found");
  }
  res.status(200).json(contacts);
});

module.exports = {
  getcontact,
  getonecontact,
  updatecontact,
  deletecontact,
  createcontact,
};
