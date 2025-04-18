import React, { useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";

export default function HeaderProvider({ children }) {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <HeaderContext.Provider value={{ mode, toggleMode }}>
      {children}
    </HeaderContext.Provider>
  );
}
