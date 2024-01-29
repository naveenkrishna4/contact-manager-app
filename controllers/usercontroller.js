const asyncHandler = require("express-async-handler");

//@desc Register user
//@access public
//route POST api/users/register

const registerUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Register new user" });
});

//@desc Login user
//@access public
//route POST api/users/login

const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Login user" });
});

//@desc Current user info
//@access public
//route GET api/users/current

const currentUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
