const router = require("express").Router();

const apiUsers = require("./user.route");
const apiAdress = require("./adress.route");

router.use("/user", apiUsers);
router.use("/adress", apiAdress);
module.exports = router;
