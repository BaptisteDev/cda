import React, { useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";

export default function HeaderProvider({ children }) {
  const [view, setView] = useState("all");

  function changeView(value) {
    setView(value);
  }
  return (
    <HeaderContext.Provider value={{ changeView }}>
      {children}
    </HeaderContext.Provider>
  );
}
