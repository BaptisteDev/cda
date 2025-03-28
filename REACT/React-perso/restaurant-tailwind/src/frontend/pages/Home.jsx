import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Section image principale */}
      <div className="flex justify-center items-center w-full md:w-3/5 lg:w-4/5 h-full p-10 ">
        <img
          className="w-full h-full object-cover rounded-2xl pb-10"
          src="/images/ImageWrapper.png"
          alt="Image de nourriture"
        />
      </div>

      {/* Section images à droite */}
      <div className="flex flex-col justify-between items-center w-full md:w-2/5 lg:w-1/5 h-full p-10">
        <div className="w-full flex-1">
          <img
            className="w-full h-full object-cover rounded-2xl pb-10"
            src="/images/ImageWrapper1.png"
            alt="Image de nourriture"
          />
        </div>
        <div className="w-full flex-1">
          <img
            className="w-full h-full object-cover rounded-2xl pb-10"
            src="/images/ImageWrapper2.png"
            alt="Image de nourriture"
          />
        </div>
        <div className="w-full flex-1">
          <img
            className="w-full h-full object-cover rounded-2xl pb-10"
            src="/images/ImageWrapper3.png"
            alt="Image de nourriture"
          />
        </div>
      </div>
    </div>
  );
}
