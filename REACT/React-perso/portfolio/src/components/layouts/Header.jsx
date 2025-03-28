import React, { useState, useEffect } from "react";
import styles from "../module/Header.module.scss";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10); // Ajoute une petite marge pour éviter les micro-scrolls
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 77; // Décalage en pixels
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`L'élément avec l'id "${targetId}" est introuvable.`);
    }
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`${styles.header} d-flex align-items-center ${
        !isTop ? styles.shadow : ""
      }`}
    >
      <div className="flex-fill">
        <p className={`${styles.logotext}`}>Baptiste</p>
      </div>
      <div
        className={`${styles.menuburger} ${isActive ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.slidingMenu} ${isActive ? styles.open : ""}`}>
        <a
          className={`${styles.aMenu}`}
          onClick={() => handleClick("section2")}
        >
          Mes projets
        </a>
        <a
          className={`${styles.aMenu}`}
          onClick={() => handleClick("section3")}
        >
          À PROPOS
        </a>
        <a className={`${styles.aMenu}`} onClick={() => handleClick("Footer")}>
          CONTACT
        </a>
      </div>
    </header>
  );
}
