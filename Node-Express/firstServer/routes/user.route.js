const User = require("../models/user.schema");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    // récupère les données de tous les utilisateurs sauf les mots de passe
    const allUsers = await User.find({}, { password: 0 });
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
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
    const newUser = new User({
      username,
      email,
      password,
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
});

router.post("/login", async (req, res) => {
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

    // Verification que le mot de passe en base de données correspond au mot de passe saisi par l'utilisateur
    if (user.password != password) {
      return res
        .status(400)
        .json({ message: "Email et/ou mot de passe incorrect" });
    }
    // On destructure pour récdupérer un objet sans le mot de passe
    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// localhot:3000/user
