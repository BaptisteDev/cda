const { signup, signin } = require("../controllers/User.controller");

const router = require("express").Router();

router.post("/", signup);

router.post("/login", signin);

module.exports = router;

// localhot:3000/user
