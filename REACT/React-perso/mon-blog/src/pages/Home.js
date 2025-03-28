import React from "react";

const Home = () => {
  console.log("Token dans localStorage :", localStorage.getItem("token"));
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil !</h1>
    </div>
  );
};

export default Home;
