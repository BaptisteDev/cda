import React from "react";
import Button from "../buttons/Button";
export default function Header() {
  return (
    <header className="absolute w-full p-5 md:p-10 md:pl-4 lg:p-20 z-10">
      <nav className="bg-stone-950 rounded-lg h-16 md:w-md lg:w-lg">
        <ul className="flex justify-around items-center h-16">
          <li className="rounded-lg">
            <a
              href="#"
              className="bg-stone-800 p-2 md:p-3 lg:p-3 border border-solid border-stone-600 rounded-lg flex flex-col justify-center text-xs"
            >
              <span className="w-6 bg-stone-50 h-0.5 mb-2"></span>
              <span className="w-6 bg-stone-50 h-0.5 mb-2"></span>
              <span className="w-6 bg-stone-50 h-0.5"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className=" object-cover rounded-2xl w-20"
                src="/images/logo.png"
                alt="Image du logo"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-xs md:text-lg  lg:text-lg  w-20 md:w-32 lg:w-48"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-xs md:text-lg  lg:text-lg  w-20 md:w-32 lg:w-48"
            >
              A propos
            </a>
          </li>
          <li>
            <Button text="Réserver"></Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
