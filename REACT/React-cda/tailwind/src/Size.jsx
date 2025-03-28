function Size() {
  return (
    <div>
      {/* <!-- w-full: Largeur pleine --> */}
      <div className="h-20 w-full bg-blue-500"></div>

      {/* <!-- w-1/2: Largeur moitié --> */}
      <div className="h-10 w-1/2 bg-green-500"></div>

      {/* <!-- w-1/4: Largeur un quart --> */}
      <div className="h-10 w-1/4 bg-red-500"></div>

      {/* <!-- w-3/4: Largeur trois quarts --> */}
      <div className="h-10 w-3/4 bg-yellow-500"></div>

      {/* <!-- w-auto: Largeur automatique --> */}
      <button className="h-10 w-auto bg-purple-500 px-4 text-white">
        Bouton w-auto
      </button>

      {/* <!-- h-full: Hauteur pleine (dépend du parent) --> */}
      <div className="h-full w-1/4 bg-pink-500"></div>

      {/* <!-- h-screen: Hauteur de l'écran --> */}
      <div className="h-screen w-1/4 bg-indigo-500"></div>

      {/* <!-- size-1/2: Taille moitié pour largeur et hauteur --> */}
      <div className="size-1/2 bg-gray-500"></div>

      {/* <!-- max-w-xs: Largeur maximale extra small --> */}
      <div className="h-10 max-w-xs bg-teal-500"></div>

      {/* <!-- min-w-full: Largeur minimale pleine --> */}
      <div className="h-10 min-w-full bg-orange-500"></div>
    </div>
  );
}

export default Size;
