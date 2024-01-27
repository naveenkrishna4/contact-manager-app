//@desc Get all contacts
//@access public
//route GET api/contacts

const getcontact = async (req, res) => {
  res.status(200).json({ msg: "Get all contacts" });
};

//@desc Get one contact
//@access public
//route GET api/contacts/:id

const getonecontact = async (req, res) => {
  res.status(201).json({ msg: `Get contact for id ${req.params.id}` });
};

//@desc Create new contact
//@access public
//route POST api/contacts

const createcontact = async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory.");
  }
  res.status(202).json({ msg: "Create contact" });
};

//@desc Update contact
//@access public
//route PUT api/contacts/:id

const updatecontact = async (req, res) => {
  res.status(203).json({ msg: `Update contact for id ${req.params.id}` });
};

//@desc Delete contact
//@access public
//route DELETE api/contacts/:id

const deletecontact = async (req, res) => {
  res.status(204).json({ msg: `Delete contact for id ${req.params.id}` });
};

module.exports = {
  getcontact,
  getonecontact,
  updatecontact,
  deletecontact,
  createcontact,
};
