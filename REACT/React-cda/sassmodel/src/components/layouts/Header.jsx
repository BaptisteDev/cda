import React, { useState } from "react";
import styles from "../module/Header.module.scss";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`${styles.header} d-flex align-items-center`}>
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
        <a href="#">Home</a>
        <a href="#">ABOUT</a>
      </div>
    </header>
  );
}
