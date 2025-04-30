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

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Compte introuvable" });
    }
    if (password != user.password) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}),
  router.post("/", async (req, res) => {
    console.log(req.body);
    try {
      // on déstructure les données reçues depuis l'application front (REACT)
      const { email, password } = req.body;

      // vérification si ce mail est déjà présent
      const user = await User.findOne({ email });

      // si oui retour d'un message avec un status d'erreur
      if (user) {
        return res.status(400).json({ message: "Déjà inscrit" });
      }

      // on crée un nouvel utilisateur conforme au schéma
      const newUser = new User({
        email,
        password,
      });
      // on sauvegarde cet utilisateur en BDD
      await newUser.save();
      // on retourne l'utilisateur
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;

// localhot:3000/user
