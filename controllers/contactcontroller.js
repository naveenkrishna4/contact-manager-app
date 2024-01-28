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
  res.status(201).json({ msg: `Get contact for id ${req.params.id}` });
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
  res.status(203).json({ msg: `Update contact for id ${req.params.id}` });
});

//@desc Delete contact
//@access public
//route DELETE api/contacts/:id

const deletecontact = asyncHandler(async (req, res) => {
  res.status(204).json({ msg: `Delete contact for id ${req.params.id}` });
});

module.exports = {
  getcontact,
  getonecontact,
  updatecontact,
  deletecontact,
  createcontact,
};
