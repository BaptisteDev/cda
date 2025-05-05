const {
  getAdress,
  addAdress,
  updateAdress,
  removeAdress,
} = require("../controllers/Adress.controller");

const router = require("express").Router();

router.get("/:userId", getAdress);
// add adress
router.post("/add", addAdress);

router.post("/update", updateAdress);

router.post("/delete/:userId", removeAdress);

module.exports = router;
