import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (credentials) => {
    setUser(credentials);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
