const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const users = require("../models/usermodel");
const jwt = require("jsonwebtoken");

//@desc Register user
//@access public
//route POST api/users/register

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !username || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const isuser = await users.findOne({ email });
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
    res.status(400);
    throw new Error("User data not valid");
  }
});

//@desc Login user
//@access public
//route POST api/users/login

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await users.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accesstoken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accesstoken });
  } else {
    res.status(400);
    throw new Error("Email or password is incorrect");
  }
});

//@desc Current user info
//@access public
//route GET api/users/current

const currentUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
