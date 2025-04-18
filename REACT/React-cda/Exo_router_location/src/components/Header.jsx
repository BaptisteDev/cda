import { Menu } from "lucide-react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { HeaderContext } from "../context/HeaderContext";
import { ListingsContext } from "../context/ListingsContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { mode, toggleMode } = useContext(HeaderContext);
  const { user, logout } = useContext(AuthContext);
  const { toggleHome } = useContext(ListingsContext);
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold text-red-500">
        Airbed & Breakfast
      </NavLink>

      {/* Catégories */}
      <div className="flex flex-row">
        {user ? (
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/maison"
              className="text-gray-600 hover:text-black"
              onClick={toggleHome}
            >
              Maisons
            </NavLink>
            <NavLink
              to="/appartement"
              className="text-gray-600 hover:text-black"
              onClick={toggleHome}
            >
              Appartements
            </NavLink>
            <a
              href="#"
              className="text-gray-600 hover:text-black"
              onClick={logout}
            >
              Deconnexion
            </a>
          </nav>
        ) : (
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/login" className="text-gray-600 hover:text-black">
              Connexion
            </NavLink>
            <NavLink to="/register" className="text-gray-600 hover:text-black">
              Inscritption
            </NavLink>
          </nav>
        )}
        <a href="#" className="text-xl ml-6" onClick={toggleMode}>
          {!mode ? <FaSun /> : <FaMoon />}
        </a>
        {/* Menu Burger (Mobile) */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
