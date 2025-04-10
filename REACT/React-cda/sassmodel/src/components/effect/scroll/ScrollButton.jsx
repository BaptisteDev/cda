import React from "react";

const ScrollButton = ({ targetId }) => {
  const handleScroll = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`L'élément avec l'id "${targetId}" est introuvable.`);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="fs-12">Clique pour voir la suite </p>
      <a onClick={handleScroll}>
        <i className="fa-solid fa-circle-arrow-down"></i>
      </a>
    </div>
  );
};
export default ScrollButton;
