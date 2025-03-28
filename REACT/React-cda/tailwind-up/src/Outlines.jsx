import "./App.css";

function Outlines() {
  return (
    <div className="m-auto h-screen w-1/2">
      <div>
        <button class="m-10 outline outline-offset-2 outline-teal-500">
          Bouton A
        </button>
        <button class="m-10 outline outline-offset-2 outline-red-500">
          Bouton B
        </button>
        <button class="m-10 outline outline-offset-2 outline-blue-500/50">
          Bouton C
        </button>
      </div>
      <div>
        <button class="m-10 outline outline-offset-1 outline-blue-600">
          Bouton A
        </button>
        <button class="m-10 outline outline-offset-2 outline-blue-600">
          Bouton B
        </button>
        <button class="m-10 outline outline-offset-4 outline-blue-600">
          Bouton C
        </button>
        <button class="m-10 outline outline-offset-8 outline-blue-600">
          Bouton D
        </button>
      </div>
      <div>
        <button class="m-10 outline outline-4 outline-blue-600">
          Bouton A
        </button>
        <button class="m-10 outline-dashed outline-4 outline-blue-600">
          Bouton B
        </button>
        <button class="m-10 outline-dotted outline-4 outline-blue-600">
          Bouton C
        </button>
        <button class="m-10 outline-double outline-4 outline-blue-600">
          Bouton D
        </button>
      </div>
      <div>
        <button class="m-10 ring ring-pink-500 ring-offset-0">Button A</button>
        <button class="m-10 ring ring-pink-500 ring-offset-2">Button B</button>
        <button class="m-10 ring ring-pink-500 ring-offset-4">Button C</button>
      </div>
      <div>
        <button class="m-10 ring ring-pink-500 ring-offset-2 ring-offset-teal-500">
          Mon bouton
        </button>
      </div>
    </div>
  );
}

export default Outlines;
