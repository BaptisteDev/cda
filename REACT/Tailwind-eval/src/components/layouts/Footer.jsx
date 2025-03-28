import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 bottom-0 md:absolute w-full flex flex-col  md:flex-row md:justify-around lg:items-center lg:flex-row lg:justify-around md:items-center md:h-40 p-5">
      <div className="w-70 flex flex-col mb-4">
        <h2 className="text-white font-medium text-xl mb-4">À propos</h2>
        <p className="text-white">
          Nous aidons les voyageurs à trouver le logement idéal.
        </p>
      </div>
      <div className="flex flex-col w-70 mb-4">
        <h2 className="text-white font-medium text-xl mb-4">Support</h2>
        <a href="#" className="text-white hover:underline">
          Contact
        </a>
        <a href="#" className="text-white hover:underline">
          Faq
        </a>
      </div>
      <div className="flex flex-col w-70 mb-4">
        <h2 className="text-white font-medium text-xl mb-4">Suivez-nous</h2>
        <a href="#" className="text-white hover:underline">
          Facebook
        </a>
        <a href="#" className="text-white hover:underline">
          Instagram
        </a>
      </div>
      <div className="flex flex-col w-70 mb-4">
        <h2 className="text-white font-medium text-xl mb-4">
          Mentions légales
        </h2>
        <a href="#" className="text-white hover:underline">
          Conditions générales
        </a>
        <a href="#" className="text-white hover:underline">
          Politique de confidentialité
        </a>
      </div>
    </footer>
  );
}
