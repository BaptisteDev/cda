import React from "react";
import styles from "../module/Section3.module.scss";
import Banniere from "../effect/banniere/Banniere";
import imgChess from "../../assets/images/chess.jpg";
export default function Section3() {
  return (
    <section
      id="section3"
      className={` d-flex flex-column ${styles.sizePage} `}
    >
      <div className={` d-flex flex-column flex-fill `}>
        <Banniere></Banniere>
        <div className="d-flex flex-column justify-content-arround mt-15 m-10">
          <img className={` ${styles.imgChess} `} src={imgChess} alt="" />
          <div className="d-flex justify-content-center">
            {" "}
            <h2 className={` ${styles.h1Text} `}>Présentation</h2>
          </div>
          <div className={`d-flex ${styles.responsive} `}>
            <div className={`w-48 text-justify mr-15 ${styles.responsiveP} `}>
              <h2>Parlons de moi</h2>
              <p>
                Je m’appelle Baptiste W, développeur web passionné et
                auto-entrepreneur spécialisé dans la création d’interfaces
                modernes et performantes. J’allie la puissance de React pour le
                front-end et la robustesse de Laravel pour le back-end afin de
                concevoir des applications web dynamiques et intuitives. Fort de
                mon expertise en JavaScript et des technologies associées, je
                conçois des solutions sur mesure, optimisées pour la performance
                et l’expérience utilisateur.
              </p>
              <p className="text-justify">
                Toujours en veille technologique, j’aime relever de nouveaux
                défis et proposer des produits innovants adaptés aux besoins de
                mes clients. Que ce soit pour un site web, une application SaaS
                ou une refonte, je mets mon savoir-faire à votre service pour
                donner vie à vos projets digitaux.
              </p>
              <p className="text-justify">
                Besoin d’un développeur pour concrétiser votre idée ? Parlons-en
                !
              </p>
            </div>
            <div className={`w-48 text-justify mr-15 ${styles.responsiveP} `}>
              <h2 className="text-end">Un peu plus</h2>
              <p className="text-justify">
                Au-delà du développement web, je suis quelqu’un de passionné par
                plusieurs univers. Le football occupe une grande place dans ma
                vie, et mon cœur bat au rythme du Racing Club de Lens. Suivre
                les matchs, vibrer devant chaque action et partager cette
                ferveur, c’est quelque chose qui me fait vivre de grandes
                émotions.
              </p>
              <p className="text-justify">
                J’ai aussi un vrai goût pour les films et les séries, toujours à
                la recherche de la prochaine pépite qui saura me captiver. Qu’il
                s’agisse d’un bon thriller, d’une série SF bien construite ou
                d’un film culte, j’adore analyser les scénarios et les mises en
                scène.
              </p>
              <p className="text-justify">
                Enfin, je crois que les échecs (le jeu, mais aussi dans la vie)
                sont essentiels pour progresser. Chaque difficulté est une
                opportunité d’apprendre, de rebondir et de devenir meilleur, que
                ce soit sur un projet, dans le sport ou dans mes ambitions
                personnelles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
