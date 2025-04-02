import React from "react";
import Listing from "./Listing";
import Review from "./Review";

export default function Logement() {
  //Initialistion de ma list de logement

  return (
    <section className="m-5">
      <Listing></Listing>
      <Review></Review>
    </section>
  );
}
