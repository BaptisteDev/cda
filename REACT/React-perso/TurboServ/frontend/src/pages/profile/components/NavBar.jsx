import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="pt-2 lg:w-2/10  md:mx-2">
      <h2 className="text-xl mt-3 mb-3">Mon compte</h2>
      <div className="flex justify-between items-center mt-2 gap-4 lg:flex-col lg:items-start lg:mt-10">
        <NavLink to="/profil" className="md:flex md:items-center lg:mb-5" end>
          <img
            className="mr-2 w-[40px]"
            src="/src/assets/images/profil/profil.svg"
            alt=""
          />
          <span className="hidden md:flex">Mon Profil</span>
        </NavLink>
        <NavLink
          to="/profil/mes-serveurs"
          className="md:flex md:items-center lg:mb-5"
        >
          <img
            className="mr-2 w-[40px]"
            src="/src/assets/images/profil/server.svg"
            alt=""
          />
          <span className="hidden md:flex">Mes serveurs </span>
        </NavLink>
        <NavLink
          to="/profil/mes-modèles"
          className="md:flex md:items-center lg:mb-5"
        >
          <img
            className="mr-2 w-[40px]"
            src="/src/assets/images/profil/template.svg"
            alt=""
          />
          <span className="hidden md:flex">Mes modèles </span>
        </NavLink>
        <NavLink
          to="/profil/mes-achats"
          className="md:flex md:items-center lg:mb-5"
        >
          <img
            className="mr-2 w-[40px]"
            src="/src/assets/images/profil/shop.svg"
            alt=""
          />
          <span className="hidden md:flex">Mes achats </span>
        </NavLink>
        <NavLink
          to="/profil/mes-tickets"
          className="md:flex md:items-center lg:mb-5"
        >
          <img
            className="mr-2 w-[40px]"
            src="/src/assets/images/profil/ticket.svg"
            alt=""
          />
          <span className="hidden md:flex">Mes tickets </span>
        </NavLink>
        <NavLink
          to="/profil/mes-affiliations"
          className="md:flex md:items-center lg:mb-5"
        >
          <img
            className="mr-2 w-[40px]"
            src="/src/assets/images/profil/affiliate.svg"
            alt=""
          />
          <span className="hidden md:flex">Mes affiliations </span>
        </NavLink>
      </div>
    </div>
  );
}
