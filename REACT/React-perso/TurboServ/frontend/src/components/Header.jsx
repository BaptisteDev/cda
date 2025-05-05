import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

// Data pour test en front
import gamesList from "../data/GameList.json";

// On récupére notre context server
import { ServerContext } from "../context/ServerContext";

export default function Header() {
  const { changeDefaultValue } = useContext(ServerContext);
  const { user, logout } = useContext(AuthContext);

  // Open dropdown ou open menu par default a false (false = fermer)
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdownGames, setOpenDropdownGames] = useState(false);
  const [openDropdownModele, setOpenDropdownModele] = useState(false);
  const [openDropdownHelp, setOpenDropdownHelp] = useState(false);

  // Function qui permet l'ouverture et la fermeture du menu en responsive
  const menu = () => {
    setOpenMenu(!openMenu);
  };

  // Function qui permet l'ouverture et la fermeture du dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdownGames(dropdown === "games" ? !openDropdownGames : false);
    setOpenDropdownModele(dropdown === "modele" ? !openDropdownModele : false);
    setOpenDropdownHelp(dropdown === "help" ? !openDropdownHelp : false);
  };

  return (
    <>
      <nav className="mb-5 h-[80px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] ">
        <div className="container md:flex md:items-center h-full">
          <ul className="flex justify-between items-center h-full w-full md:w-1/6 md:ml-2">
            <li className="flex items-center md:mr-4">
              <NavLink className="text-black" to="/">
                <img
                  className="w-[180px]"
                  src="/src/assets/images/logo.svg"
                  alt=""
                />
              </NavLink>
            </li>
            <li
              className="burger-icons mr-2 md:hidden cursor-pointer"
              onClick={menu}
            >
              <span
                className={`block w-7 h-0.5 mb-2 bg-black rounded transition-transform duration-300 ease-in-out ${
                  openMenu ? "transform rotate-45 translate-y-[10px]" : ""
                }`}
              />
              <span
                className={`block w-7 h-0.5 mb-2 bg-black rounded transition-opacity duration-300 ease-in-out ${
                  openMenu ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-7 h-0.5 bg-black rounded transition-transform duration-300 ease-in-out ${
                  openMenu ? "transform -rotate-45 -translate-y-[10px]" : ""
                }`}
              />
            </li>
          </ul>
          <ul
            className={` md:mt-0 md:flex md:justify-between md:items-center md:relative md:w-5/6 md:mr-2 z-10 ${
              openMenu
                ? "block absolute bg-white w-full h-full mt-1 transition-transform duration-300 ease-in-out"
                : "hidden"
            }`}
          >
            <div className="md:flex">
              <li className="md:mr-5">
                <a
                  className="text-black flex items-center my-4 mx-3 md:m-0 cursor-pointer"
                  onClick={() => toggleDropdown("games")}
                >
                  <img
                    src="/src/assets/images/icons/box.svg"
                    className="mr-3"
                    alt="box"
                  />
                  Serveur de jeux
                  <img
                    src="/src/assets/images/icons/down-arrow.svg"
                    className={` ml-3 ${
                      openDropdownGames ? " rotate-180" : "rotate-0"
                    }`}
                    alt="arrow"
                  />
                </a>
                <ul
                  className={`mt-[-12px] absolute md:mt-[10px] md:py-[20px] border-1 bg-white shadow p-3 w-[330px]  flex flex-wrap z-10   ${
                    openDropdownGames ? "block ml-2 md:ml-0" : "hidden"
                  }`}
                >
                  {gamesList.map((game) => (
                    <li key={game.id} className="mr-2 py-2 group w-[127px]">
                      <NavLink
                        to="/serveur-de-jeux"
                        className="flex items-center mr-2"
                        onClick={() => {
                          toggleDropdown("games");
                          changeDefaultValue(game.name);
                        }}
                      >
                        <img
                          src={game.image}
                          className="mr-1 w-[21px] h-[20px]"
                          alt=""
                        />
                        <span className="relative whitespace-nowrap inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          {game.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="md:mr-5 ">
                <a
                  className="text-black flex items-center my-4 mx-3 md:m-0 cursor-pointer"
                  onClick={() => toggleDropdown("modele")}
                >
                  <img
                    src="/src/assets/images/icons/modele.svg"
                    className="mr-3"
                    alt=""
                  />
                  Modèle
                  <img
                    src="/src/assets/images/icons/down-arrow.svg"
                    className={` ml-3 ${
                      openDropdownModele ? " rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </a>
                <ul
                  className={`mt-[-12px] absolute md:mt-[10px] md:py-[20px] border-1 bg-white shadow p-3 w-[330px]  flex flex-wrap z-10   ${
                    openDropdownModele ? "block ml-2 md:ml-0" : "hidden"
                  }`}
                >
                  {gamesList.map((game) => (
                    <li key={game.id} className="mr-2 py-2 group w-[127px]">
                      <NavLink
                        to="/serveur-de-jeux"
                        className="flex items-center mr-2"
                        onClick={() => {
                          toggleDropdown("modele");
                          changeDefaultValue(game.name);
                        }}
                      >
                        <img
                          src={game.image}
                          className="mr-1 w-[21px] h-[20px]"
                          alt=""
                        />
                        <span className="relative whitespace-nowrap inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          {game.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="md:mr-5">
                <a
                  className="text-black flex items-center my-4 mx-3 md:m-0 cursor-pointer"
                  onClick={() => toggleDropdown("help")}
                >
                  <img
                    src="/src/assets/images/icons/assistance.svg"
                    className="mr-3"
                    alt=""
                  />
                  Assistance
                  <img
                    src="/src/assets/images/icons/down-arrow.svg"
                    className={` ml-3 ${
                      openDropdownHelp ? " rotate-180" : "rotate-0"
                    }`}
                    alt=""
                  />
                </a>
                <ul
                  className={` absolute md:mt-[10px] md:py-[20px] border-1 bg-white shadow p-3 w-[300px]  flex flex-col z-10 mt-[-12px]  ${
                    openDropdownHelp ? "block ml-2 md:ml-0" : "hidden"
                  }`}
                >
                  <li className="mr-2 group">
                    <a href="#" className="flex items-center">
                      <img
                        src="/src/assets/images/dropdown/faq.svg"
                        className="mr-3"
                        alt=""
                      />
                      <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        Faq
                      </span>
                    </a>
                  </li>
                  <li className="mr-2 flex items-center mt-2 group">
                    <a href="#" className="flex items-center">
                      <img
                        src="/src/assets/images/dropdown/help.svg"
                        className="mr-3 "
                        alt=""
                      />
                      <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        Besoin d'aide
                      </span>
                    </a>
                  </li>
                  <li className="mr-2 flex items-center mt-2 group">
                    <a href="#" className="flex items-center">
                      <img
                        src="/src/assets/images/dropdown/about.svg"
                        className="mr-3 "
                        alt=""
                      />
                      <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        A propos
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </div>

            {user ? (
              <ul className="flex items-center  md:flex-row md:items-center md:space-x-4">
                <li className="mt-4 mx-3 md:m-0 md:mr-2">
                  <NavLink to="/profil" className="btn-white w-[130px]">
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li className="mt-4 mx-3 md:m-0">
                  <a
                    href="#"
                    className="flex items-center justify-center"
                    onClick={logout}
                  >
                    <img
                      className="w-[28px] h-[28px]"
                      src="/src/assets/images/icons/logout.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col md:flex-row">
                <li className="mt-4 mx-3 md:m-0 md:mr-2">
                  <NavLink className="btn-white w-[130px]" to="/login">
                    <span>Connexion</span>
                  </NavLink>
                </li>
                <li className="mt-4 mx-3 md:m-0">
                  <NavLink className="btn-pink w-[130px] " to="/register">
                    <span>Insription</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </nav>
      <div className="h-[50px] bg-primary  flex items-center">
        <div className="flex justify-between items-center px-2 container ">
          <h3 className="text-white">Bienvenue chez TurboServ</h3>
          <div className="">
            <a href="#" className="text-white mr-2">
              Discord
            </a>
            <a href="#" className="text-white">
              Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
