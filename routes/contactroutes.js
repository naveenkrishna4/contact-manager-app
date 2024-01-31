const exp = require("express");
const router = exp.Router();
const validateToken = require("../middleware/validatetoken");
const {
  getcontact,
  getonecontact,
  updatecontact,
  deletecontact,
  createcontact,
} = require("../controllers/contactcontroller.js");

router.use(validateToken);
router.route("/").get(getcontact).post(createcontact);
router
  .route("/:id")
  .get(getonecontact)
  .put(updatecontact)
  .delete(deletecontact);

module.exports = router;
