import React from "react";

import FormProfil from "./FormProfil";
import FormAdress from "./FormAdress";
export default function ProfilForm() {
  return (
    <div className="border mt-4 flex flex-col items-center p-2  lg:items-start  lg:w-6/10  md:mx-2">
      <h2 className="text-xl ml-4 mt-4 font-bold">Profil information</h2>
      <FormProfil></FormProfil>

      <h2 className="text-xl ml-4 font-bold mt-5">Adresse de facturation </h2>
      <FormAdress></FormAdress>
    </div>
  );
}
