const Adress = require("../models/adress.schema");
const User = require("../models/user.schema");

// Function récupérer l'adresse
const getAdress = async (req, res) => {
  try {
    const { userId } = req.params;

    // Récupère l'adresse associée à l'utilisateur
    const adress = await Adress.findOne({ user: userId });

    if (!adress) {
      return res.status(404).json({ message: "Adresse non trouvée" });
    }

    res.status(200).json(adress);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Function ajouter l'adresse
const addAdress = async (req, res) => {
  try {
    // recupére tout mon body
    const { userId, ...values } = req.body;

    // récupére le user
    const user = await User.findById(userId);

    // verifie si le user existe bien
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const adress = await Adress.findOne({ user: userId });
    if (!adress) {
      // on crée un nouvel utilisateur conforme au schéma
      const newAdress = new Adress({
        adress: values.adress,
        complement: values.complement,
        city: values.city,
        postalCode: values.postalCode,
        user: userId,
      });
      await newAdress.save();
      res.status(200).json("Ajout");
    } else {
      res.status(400).json("Adresse déjà existante");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateAdress = async (req, res) => {
  try {
    // recupére tout mon body
    const { userId, ...values } = req.body;

    // récupére le user
    const user = await User.findById(userId);

    // verifie si le user existe bien
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const adress = await Adress.findOne({ user: userId });
    if (adress) {
      adress.adress = values.adress;
      adress.complement = values.complement;
      adress.city = values.city;
      adress.postalCode = values.postalCode;
      adress.user = userId;
      await adress.save();
      res.status(200).json("Mise à jour de l'adresse");
    }
  } catch (error) {
    console.log(error);
  }
};

const removeAdress = async (req, res) => {
  try {
    // recupére tout mon body
    const { userId } = req.params;

    // récupére le user
    const user = await User.findById(userId);

    // verifie si le user existe bien
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const adress = await Adress.findOne({ user: userId });
    if (adress) {
      await Adress.deleteOne({ user: userId });
      res.status(200).json("L'adresse a été supprimer");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAdress, addAdress, updateAdress, removeAdress };
