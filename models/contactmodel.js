const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    phno: {
      type: String,
      required: [true, "Please enter phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);