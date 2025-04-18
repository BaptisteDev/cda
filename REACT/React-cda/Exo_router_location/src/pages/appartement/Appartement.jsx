import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Appartement() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-white text-2xl">Appartement disponibles</h1>
      <ul className="flex p-6">
        <li className="mr-3">
          <NavLink end className="text-white" to="">
            Appartement Vendu
          </NavLink>
        </li>

        <li className="mr-3">
          <NavLink className="text-white" to="a-vendre">
            Appartement Vendre
          </NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}
