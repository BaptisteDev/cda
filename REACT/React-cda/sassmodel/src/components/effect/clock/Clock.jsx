import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Nettoyage de l'intervalle lorsqu'un composant est démonté
    return () => clearInterval(interval);
  }, []);

  return <p>{time}</p>;
};

export default Clock;
