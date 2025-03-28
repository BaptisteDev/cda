import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null); // État pour stocker les données utilisateur
  const [loading, setLoading] = useState(true); // État pour gérer le chargement

  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        setUser(data); // Met à jour l'état avec les données utilisateur
        setLoading(false); // Fin du chargement
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des informations :",
          error
        );
        setLoading(false); // Fin du chargement même en cas d'erreur
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <p>Chargement des informations...</p>; // Affichage pendant le chargement
  }

  if (!user) {
    return <p>Aucune information disponible.</p>; // Si aucune donnée utilisateur
  }

  return (
    <div>
      <h1>Bienvenue, {user.username} !</h1>
      <p>Email : {user.email}</p>
      {/* Ajoutez d'autres informations si nécessaire */}
    </div>
  );
};

export default Profile;
