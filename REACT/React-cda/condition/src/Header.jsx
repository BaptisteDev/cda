const Header = ({ userToHeader, toogleUserMethod }) => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-row justify-between items-center">
      <span className="text-xl font-bold text-red-500">Sport</span>

      {userToHeader ? (
        <nav className="flex space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-black"
            onClick={toogleUserMethod}
          >
            Deconnexion
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Profil
          </a>
        </nav>
      ) : (
        <nav className="flex space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-black"
            onClick={toogleUserMethod}
          >
            Inscription
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Connexion
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
