const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">À propos</h3>
          <p>Nous aidons les voyageurs à trouver le logement idéal.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Mentions légales</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Conditions générales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
