import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function AuthProvider({ children }) {
  // On crée notre context d'authentification
  // On utilise le useState pour stocker l'utilisateur connecté
  const [spinner, setSpinner] = useState(false);
  const [user, setUser] = useState(() => {
    const connectedUser = localStorage.getItem("user");
    return connectedUser ? JSON.parse(connectedUser) : null;
  });

  // Fonction pour se connecter
  const login = (credentials) => {
    setUser(credentials);
    localStorage.setItem("user", JSON.stringify(credentials));
  };

  // Fonction pour se déconnecter
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, spinner, setSpinner }}>
      {children}
    </AuthContext.Provider>
  );
}
