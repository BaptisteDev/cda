import "./App.css";

function BackgroundClip() {
  return (
    <div className="m-auto h-screen w-1/2">
      <p className="m-4 border-4 border-double border-cyan-600 bg-yellow-500 bg-clip-border p-8 text-xl font-bold">
        L'arrière-plan s'étend sous la bordure.
      </p>

      <p className="m-4 border-4 border-double border-cyan-600 bg-yellow-500 bg-clip-padding p-8 text-xl font-bold">
        L'arrière-plan s'étend jusqu'avant la bordure.
      </p>
      <p className="m-4 border-4 border-double border-cyan-600 bg-yellow-500 bg-clip-content p-8 text-xl font-bold">
        L'arrière-plan s'arrête à la boîte de contenu.
      </p>
      <p className="m-4 border-4 border-double border-cyan-600 bg-yellow-500 bg-clip-text p-8 text-xl font-bold text-transparent">
        L'arrière-plan se limite au texte au premier-plan.
      </p>
      <p className="m-4 border-4 border-double bg-gradient-to-r from-pink-800 to-violet-800 bg-clip-text p-8 text-5xl font-bold text-transparent">
        On peut faire un gradient sur le texte.
      </p>
    </div>
  );
}

export default BackgroundClip;
