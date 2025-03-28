import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Section image principale */}
      <div className="relative flex justify-center items-center w-full md:w-4/5 lg:w-4/5 h-full p-2">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="/images/ImageWrapper.png"
          alt="Image de nourriture"
        />
        {/* Icônes repositionnées en bas à droite */}
        <div className="absolute bottom-4 right-4 flex space-x-4 rounded-2xl bg-stone-950 h-10 w-30  justify-center items-center text-white">
          <a href="#">
            <i className="fa-brands fa-instagram text-white text-xl"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter text-white text-xl"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook text-white text-xl"></i>
          </a>
        </div>
      </div>

      {/* Section images à droite */}
      <div className="flex flex-col justify-between items-center w-full md:w-2/5 lg:w-1/5 h-full p-2">
        <div className="w-full flex-1">
          <img
            className="w-full h-full object-cover rounded-2xl pb-2"
            src="/images/ImageWrapper1.png"
            alt="Image de nourriture"
          />
        </div>
        <div className="w-full flex-1">
          <img
            className="w-full h-full object-cover rounded-2xl pb-2"
            src="/images/ImageWrapper2.png"
            alt="Image de nourriture"
          />
        </div>
        <div className="w-full flex-1">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/images/ImageWrapper3.png"
            alt="Image de nourriture"
          />
        </div>
      </div>
    </div>
  );
}
