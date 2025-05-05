import React, { useEffect, useState } from "react";
import { PaiementContext } from "../../context/PaiementContext";
import serverGames from "../../data/GameList.json";
export default function PaiementProvider({ children }) {
  const [priceServer, setPriceServer] = useState(0);
  const [priceModele, setPriceModele] = useState(0);

  function changeServer(value) {
    if (value) {
      const selected = JSON.parse(value);
      setPriceServer(selected.price);
      console.log("Serveur sélectionné :", selected.name);
      console.log("Prix sélectionné :", selected.price);
    } else {
      setPriceServer(0);
    }
  }

  function changeModele(value) {
    if (value) {
      const selected = JSON.parse(value);
      setPriceModele(selected.price);
      console.log("Modèle sélectionné :", selected.name);
      console.log("Prix sélectionné :", selected.price);
    } else {
      setPriceModele(0);
    }
  }

  return (
    <PaiementContext.Provider
      value={{ changeServer, priceServer, changeModele, priceModele }}
    >
      {children}
    </PaiementContext.Provider>
  );
}
