const express = require("express");
const error = require("./middleware/errorhandler");

const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use(error);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
