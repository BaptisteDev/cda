import React, { useRef, useEffect, useState } from "react";
import styles from "../../module/Banniere.module.scss";

const Banniere = () => {
  const [slides, setSlides] = useState([
    { text: "ReactJS" },
    { text: "SASS" },
    { text: "Laravel" },
    { text: "Symfony" },
    { text: "Php" },
    { text: "HTML/CSS" },
    { text: "JavaScript" },
    { text: "NodeJS" },
    { text: "Docker" },
    { text: "Prestashop" },
    { text: "Wordpress" },
    { text: "Azuriom" },
    { text: "Figma" },
    { text: "PhotoShop" },
  ]);

  const marqueContentRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const contentElement = marqueContentRef.current;

    if (!contentElement) return;

    const totalWidth = contentElement.scrollWidth / 2;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 1;
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className={`${styles.marqueContainer}`}>
      <div
        ref={marqueContentRef}
        className={styles.marqueContent}
        style={{
          transform: `translateX(${position}px)`,
          display: "flex",
        }}
      >
        {slides.map((slide, index) => (
          <span key={index} className={styles.slideText}>
            {slide.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Banniere;
