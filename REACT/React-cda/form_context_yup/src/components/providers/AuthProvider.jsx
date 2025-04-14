import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function ExpenseProvider({ children }) {
  const [user, setUser] = useState(null);

  // Creer une methode pour inscrire l'utilisateur
  function registerUser(values) {
    setUser(values);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
