const jwt = require("jsonwebtoken");
const SECRET = "maclesecrete";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Accès non autorisé : Aucun token fourni." });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token invalide ou expiré." });
  }
};

module.exports = authMiddleware;
