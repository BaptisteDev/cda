import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header
      className={`h-[58px] px-2 py-4 bg-white shadow-2xs text-blue-600 flex flex-row items-center w-full`}
    >
      <div className="grow">
        <a href="#">
          <strong>My App</strong>
        </a>
      </div>
      {user ? (
        <div className="m-5">
          <li className="flex">
            <p className="text-black font-bold mr-2 ">{user.username}</p>
            <a className="mr-4 cursor-pointer" onClick={logout}>
              <span>Deconnexion</span>
            </a>
          </li>
        </div>
      ) : (
        <ul>
          <>
            <a className="mr-4" href="#">
              <span>Inscription</span>
            </a>
            <a className="mr-4" href="#">
              <span>Connexion</span>
            </a>
          </>
        </ul>
      )}
    </header>
  );
}
