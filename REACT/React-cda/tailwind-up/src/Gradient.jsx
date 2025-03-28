import "./App.css";

function Gradient() {
  return (
    <div className="m-auto mt-24 w-1/2">
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="h-28 bg-gradient-to-br from-sky-500 to-indigo-500"></div>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
      <div className="h-14 bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-emerald-500 to-90%"></div>
      <div className="h-14 bg-gradient-to-r from-teal-500"></div>
    </div>
  );
}

export default Gradient;
