import React, { useState } from "react";
import styles from "../module/Section2.module.scss";
import imgChaussTex from "../../assets/images/chausstex.jpg";
import animal from "../../assets/images/animal.jpg";
import twnetwork from "../../assets/images/twnetwork.jpg";
const Section2 = () => {
  const slides = [
    {
      img: imgChaussTex,
      href: "https://www.chausstex.fr/",
      title: "Chausstex 2023",
    },
    {
      img: animal, // Ajoutez d'autres images ici
      href: "https://www.animalbooking.fr/",
      title: "Animal Booking 2023",
    },
    {
      img: twnetwork,
      href: "https://www.twnetwork.fr/",
      title: "TwNetwork 2023",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="section2" className={`d-flex flex-column ${styles.sizePage}`}>
      <div className={`d-flex justify-space-between ${styles.responsive}`}>
        <h2 className={`${styles.h1Project}`}>Portfolio</h2>
        <div className={styles.slider}>
          <div
            className={styles.sliderContent}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              display: "flex",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className={`${styles.projet}`}>
                <img
                  className={`${styles.img}`}
                  src={slide.img}
                  alt={slide.title}
                />
                <a
                  className={`${styles.aStyle}`}
                  href={slide.href}
                  target="_BLANK"
                  rel="noopener noreferrer"
                >
                  {slide.title}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
          <button className={styles.prevBtn} onClick={handlePrev}>
            &#9664; {/* Flèche gauche */}
          </button>
          <button className={styles.nextBtn} onClick={handleNext}>
            &#9654; {/* Flèche droite */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
