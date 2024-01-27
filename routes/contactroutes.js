const exp = require("express");
const router = exp.Router();
const {
  getcontact,
  getonecontact,
  updatecontact,
  deletecontact,
  createcontact,
} = require("../controllers/contactcontroller.js");

router.route("/").get(getcontact).post(createcontact);

router
  .route("/:id")
  .get(getonecontact)
  .put(updatecontact)
  .delete(deletecontact);

module.exports = router;
