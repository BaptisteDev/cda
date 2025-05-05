const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: false, default: null },
    pseudo: { type: String, required: false, default: null },
    lastname: { type: String, required: false, default: null },
    avatar: { type: String, required: false, default: null },
    google_id: { type: Number, required: false, default: null },
    discord_id: { type: Number, required: false, default: null },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
