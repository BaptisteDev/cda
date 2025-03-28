const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User"); // Import du modèle User
const Article = require("./models/Article"); // Import du modèle Article
const authMiddleware = require("./middlewares/authMiddleware"); // Import du middleware d'authentification
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const SECRET = "maclesecrete"; // Clé secrète pour le token JWT

// Middleware
app.use(cors()); // Permet les requêtes cross-origin
app.use(express.json()); // Permet de lire les corps de requête JSON

// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/monBlog")
  .then(() => console.log("Connecté à MongoDB !"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Route pour récupérer tous les articles
app.get("/api/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des articles", error });
  }
});

// Route pour ajouter un nouvel article
app.post("/api/articles", async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const savedArticle = await newArticle.save();
    res.json(savedArticle);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de l'ajout de l'article", error });
  }
});

// Route pour récupérer le profil utilisateur
app.get("/api/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclure le mot de passe
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    res.json(user); // Retourner les informations utilisateur
  } catch (error) {
    console.error("Erreur dans /api/profile :", error);
    res.status(500).json({ message: "Erreur interne au serveur." });
  }
});

// Route d'inscription
app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    console.error("Erreur dans /api/register :", error);
    res.status(500).json({ message: "Erreur interne", error });
  }
});

// Route de connexion
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Mot de passe incorrect." });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion.", error });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur http://localhost:${PORT}`);
});
