const User = require("../models/user.schema");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Function inscription
const register = async (req, res) => {
  console.log(req.body);
  try {
    // Destructure the data received from the frontend
    const { email, password } = req.body;

    // Check if the email is already registered
    const user = await User.findOne({ email });

    // If the email exists, return an error response
    if (user) {
      return res.status(400).json({ message: "Déjà inscrit" });
    }

    // Create a new user according to the schema
    const newUser = new User({
      email,
      password: await bcrypt.hash(password, 10),
    });

    // Save the user to the database
    await newUser.save();
    res
      .status(201)
      .json({ message: "Inscrtiption réussie ! Veuillez vous connecter" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

// Function connexion
const login = async (req, res) => {
  try {
    // on déstructure les données reçues depuis l'application front (REACT)
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // vérification si l'utilisateur existe
    // si non retour d'un message avec un status d'erreur
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email ou mot de passe incorrect" });
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

// Function Update Profil
const updateProfile = async (req, res) => {
  try {
    // recupére tout mon body
    const { userId, ...values } = req.body;

    // récupére le user
    const user = await User.findById(userId);

    // verifie si le user existe bien
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    // en base de donnée j'enregistre le nom et la destination de l'image
    user.firstname = values.firstname;
    user.lastname = values.lastname;
    user.pseudo = values.pseudo;
    user.email = values.email;
    await user.save();

    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
  }
};
// Storage function
const storage = multer.diskStorage({
  // je créer ma destitaion en recursive aved l'id user
  destination: (req, file, cb) => {
    const userId = req.params.userId || "unknown";
    const userDir = path.resolve(
      __dirname,
      `../../frontend/public/assets/images/avatar/${userId}/`
    );
    // Supprimer le dossier s'il existe déjà
    if (fs.existsSync(userDir)) {
      fs.rmSync(userDir, { recursive: true, force: true }); // Supprime tout le dossier
    }

    // Recréer le dossier proprement
    fs.mkdirSync(userDir, { recursive: true });
    cb(null, userDir);
  },
  // enregistre le nom du fichier aved l'id user
  filename: (req, file, cb) => {
    const userId = req.params.userId || "unknown";
    const uniqueName = `${userId}_${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueName);
  },
});

// upload le fichier avec maximum 5mb
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// Function update Avatar
const updateAvatar = [
  upload.single("avatar"),
  async (req, res) => {
    try {
      const fileName = req.file.filename;
      const userId = req.body.userId;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      user.avatar = "/public/assets/images/avatar/" + userId + "/" + fileName;
      await user.save();

      const { password: _, ...userWithoutPassword } = user.toObject();
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur, cousin." });
    }
  },
];

module.exports = { register, login, updateAvatar, updateProfile };
