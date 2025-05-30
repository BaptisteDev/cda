import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement (par exemple, 2 secondes)
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadComplete) onLoadComplete(); // Appelle la fonction de rappel
    }, 3500);

    // Nettoyage du timer pour éviter une fuite de mémoire
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    isLoading && (
      <div className="loading">
        <h1>Bienvenue</h1>
      </div>
    )
  );
};

export default LoadingScreen;
