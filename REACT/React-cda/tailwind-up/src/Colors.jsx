import "./App.css";

function Colors() {
  return (
    <div classNameName="p-4 text-sm text-gray-800">
      <div className="m-1 bg-bermuda text-center">m-1</div>
      <div className="m-2 bg-metal text-silver p-2 text-center">p-2 m-2</div>
      <div className="m-3 bg-tahitiDark p-3 text-center text-white">
        p-3 m-3
      </div>
      <div className="m-4 bg-tahitiLight p-4 text-center text-white">
        p-4 m-4
      </div>
      <div className="mx-2 bg-green-300 px-2 text-center">px-2 mx-2</div>
      <div className="my-2 bg-green-400 py-2 text-center">py-2 my-2</div>
      <div className="mx-3 bg-green-500 px-3 text-center text-white">
        px-3 mx-3
      </div>
      <div className="my-3 bg-green-600 py-3 text-center text-white">
        py-3 my-3
      </div>
      <button className="m-2 bg-red-500 p-2 text-white">Bouton p-2 m-2</button>
      <button className="m-3 bg-red-600 p-3 text-white">Bouton p-3 m-3</button>
      <div className="m-auto w-1/4 bg-yellow-300 p-2 text-center">
        m-auto w-1/4 p-2
      </div>
    </div>
  );
}

export default Colors;
