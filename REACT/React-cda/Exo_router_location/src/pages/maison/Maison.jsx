import React from "react";
import Listings from "../listing/Listings";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { NavLink, Outlet } from "react-router-dom";
export default function Maison() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-white text-2xl">Maison disponibles</h1>
      <ul className="flex p-6">
        <li className="mr-3">
          <NavLink end className="text-white" to="">
            Maison Vendu
          </NavLink>
        </li>

        <li className="mr-3">
          <NavLink className="text-white" to="a-vendre">
            Maison a Vendre
          </NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}
