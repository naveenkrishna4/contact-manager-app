const express = require("express");
const error = require("./middleware/errorhandler");
const connectdb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectdb();
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use(error);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
