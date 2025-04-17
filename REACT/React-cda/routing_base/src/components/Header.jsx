import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      className={`h-[58px] px-2 py-4 bg-white shadow-2xs text-blue-600 flex flex-row items-center w-full`}
    >
      <div className="grow">
        <NavLink className="mr-4" to="/">
          <strong>My App</strong>
        </NavLink>
      </div>
      <ul>
        {user ? (
          <>
            <a className="mr-4" href="#" onClick={logout}>
              <span>Déconnexion</span>
            </a>
            <a className="mr-4" href="#">
              <span>Profile</span>
            </a>
          </>
        ) : (
          <>
            <NavLink className="mr-4" to="/register">
              <span>Insription</span>
            </NavLink>
            <NavLink className="mr-4" to="/login">
              <span>Connexion</span>
            </NavLink>
          </>
        )}
      </ul>
    </header>
  );
}
