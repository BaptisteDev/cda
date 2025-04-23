import React, { useState } from "react";
import serverList from "../../data/Server.json";
import { ServerContext } from "../../context/ServerContext";

export default function ServerProvider({ children }) {
  // La valeur par default est Minecraft
  const [defaultValue, setDefaultValue] = useState("Minecraft");

  // use State pour afficher la liste avec la valeur demandé
  const [displayedList, setDisplayedList] = useState(
    serverList.filter((item) => item.name === defaultValue)
  );

  // la valeur par default (exemple : header > click sur garry's mod il mettra garry's mod en par default pour que le displayedList soit correcte )
  function changeDefaultValue(value) {
    setDefaultValue(value);
    changeContent(value);
  }

  // Change le contenu de notre list par rapport a l'item clicker
  function changeContent(value) {
    const filteredList = serverList.filter((item) => item.name === value);
    setDefaultValue(value);
    setDisplayedList(filteredList);
  }
  return (
    <ServerContext.Provider
      value={{ displayedList, changeContent, defaultValue, changeDefaultValue }}
    >
      {children}
    </ServerContext.Provider>
  );
}
