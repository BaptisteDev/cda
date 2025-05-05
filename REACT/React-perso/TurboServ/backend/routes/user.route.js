const router = require("express").Router();

const {
  register,
  login,
  updateAvatar,
  updateProfile,
} = require("../controllers/User.controller");

// Register function
router.post("/", register);

// Login function
router.post("/login", login);

// Storage avatar function
router.post("/avatar/:userId", updateAvatar);

// Profil Update
router.post("/profil/update", updateProfile);

module.exports = router;
