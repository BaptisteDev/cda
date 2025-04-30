import React, { useState } from "react";
import { PaiementContext } from "../../context/PaiementContext";

export default function PaiementProvider({ children }) {
  const [server, setServer] = useState([]);
  const [priceServer, setPriceServer] = useState();
  function changeServer(value) {
    setServer(value.name);
    setPriceServer(value.price);
  }

  return (
    <PaiementContext.Provider value={{ server, changeServer, priceServer }}>
      {children}
    </PaiementContext.Provider>
  );
}
