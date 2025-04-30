import React from "react";
import BlockPaiement from "../../components/paiement/BlockPaiement";

export default function Home() {
  return (
    <div className="px-2">
      <div className="flex flex-col justify-center items-center mt-5">
        <h2 className="text-3xl text-center">
          Choisissez votre
          <span className="text-primary font-medium"> serveur</span> de
          <span className="text-primary font-medium">jeu</span> clé en main ! 🚀
        </h2>
        <p className="mt-2 text-[18px] text-center">
          Lancez <span className="font-bold">votre serveur en un clic</span> et
          profitez d'une configuration
          <span className="font-bold"> optimisée</span> dès le départ !
        </p>
        <p className="mt-2  text-[18px] text-center">
          Sélectionnez un <span className="font-bold"> modèle de serveur</span>
          parmi nos modèles préconfigurés, adaptés à
          <span className="font-bold"> chaque type de jeu.</span>
        </p>
      </div>
      <BlockPaiement></BlockPaiement>
    </div>
  );
}
