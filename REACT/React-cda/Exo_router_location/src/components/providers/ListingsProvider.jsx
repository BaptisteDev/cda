import React, { useState } from "react";
import { ListingsContext } from "../../context/ListingsContext";

export default function ListingsProvider({ children }) {
  const [home, setHome] = useState(false);
  const toggleHome = () => {
    setHome(!home);
  };

  return (
    <ListingsContext.Provider value={{ toggleHome }}>
      {children}
    </ListingsContext.Provider>
  );
}
