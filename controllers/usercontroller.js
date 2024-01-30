const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const users = require("../models/usermodel");

//@desc Register user
//@access public
//route POST api/users/register

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const isuser = await findOne(email);
  if (isuser) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hashedpw = await bcrypt.hash(password, 10);
  const user = await users.create({ username, email, password: hashedpw });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ id: user.id, email: user.email });
  } else {
    registerUser.status(400);
    throw new Error("User data not valid");
  }
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
