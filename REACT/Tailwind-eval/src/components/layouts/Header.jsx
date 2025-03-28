import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="h-15 shadow-xl">
        <ul className="flex justify-between items-center h-full mx-4 ">
          <li className="text-red-600 font-medium text-xl">
            Airbed & Breakfast
          </li>
          <ul className="hidden md:flex lg:flex">
            <li className="mr-4">
              <a href="#" className="text-stone-600 hover:text-stone-950">
                Maisons
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-stone-600 hover:text-stone-950">
                Appartements
              </a>
            </li>
            <li className="">
              <a href="#" className="text-stone-600 hover:text-stone-950">
                Villas
              </a>
            </li>
          </ul>
          <ul className="flex md:hidden lg:hidden text-xl">
            <i className="fa-solid fa-bars"></i>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
