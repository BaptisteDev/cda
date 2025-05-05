const mongoose = require("mongoose");

const AdressSchema = new mongoose.Schema(
  {
    adress: { type: String, required: true },
    complement: { type: String, required: false, default: null },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Adress = mongoose.model("Adress", AdressSchema);

module.exports = Adress;
