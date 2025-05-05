import React from "react";
import Slider from "./components/Slider";
import ListServer from "./components/ListServer";

export default function ServerGames() {
  return (
    <section id="server-games" className="mx-2">
      <div className="flex flex-col justify-center md:flex-row">
        <h2 className="text-4xl mb-4 mt-10 flex flex-col items-center md:flex-row gap-1">
          <span className="text-primary font-medium">STOCK LIMITÉ </span>SUR LES
          OFFRES
          <img
            src="/src/assets/images/icons/reduction.svg"
            className="md:mr-1"
            alt="reduction"
          />
        </h2>
      </div>
      <Slider></Slider>
      <ListServer></ListServer>
    </section>
  );
}
