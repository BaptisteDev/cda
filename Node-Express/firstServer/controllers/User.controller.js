const User = require("../models/user.schema");
const bcrypt = require("bcrypt");

// inscription
const signup = async (req, res) => {
  try {
    // on déstructure les données reçues depuis l'application front (REACT)
    const { username, email, password } = req.body;

    // vérification si ce mail est déjà présent
    const user = await User.findOne({ email });

    // si oui retour d'un message avec un status d'erreur
    if (user) {
      return res.status(400).json({ message: "Déjà inscrit" });
    }

    // on crée un nouvel utilisateur conforme au schéma
    // on hash le mot de passe avec bcrypt
    const newUser = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    // on sauvegarde cet utilisateur en BDD
    await newUser.save();
    // on retourne l'utilisateur
    res
      .status(201)
      .json({ message: "Inscrtiption réussie ! Veuillez vous connecter" });
  } catch (error) {
    console.log(error);
  }
};

// connexion
const signin = async (req, res) => {
  try {
    // Récupération des données envoyées depuis l'application web
    const { email, password } = req.body;

    // Verfication que l'utilisateur existe
    const user = await User.findOne({ email });

    // Si non feedBack non explicite
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email et/ou mot de passe incorrect" });
    }

    if (await bcrypt.compare(password, user.password)) {
      // On destructure pour récdupérer un objet sans le mot de passe
      const { password: _, ...userWithoutPassword } = user.toObject();
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(400).json({ message: "Email et/ou mot de passe incorrect" });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { signup, signin };
