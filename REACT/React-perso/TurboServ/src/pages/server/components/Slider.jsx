import React, { useEffect, useContext } from "react";

// Data pour test en front
import gamesList from "../../../data/GameList.json";
import { ServerContext } from "../../../context/ServerContext";

export default function Slider() {
  // On récupére notre context server
  const { changeContent, defaultValue } = useContext(ServerContext);

  // Use effect pour un effet de grab pour le slide de nos serveur de jeux
  useEffect(() => {
    const slider = document.getElementById("scroll-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; // vitesse de glisse
      slider.scrollLeft = scrollLeft - walk;
    });

    return () => {
      // Cleanup
      slider.removeEventListener("mousedown", () => {});
      slider.removeEventListener("mouseleave", () => {});
      slider.removeEventListener("mouseup", () => {});
      slider.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div
      id="scroll-container"
      className="flex justify-between  whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing select-none h-[70px] border rounded-xl px-4 overflow-hidden "
    >
      {gamesList.map((game) => (
        <div
          key={game.id}
          className="cursor-pointer flex justify-center items-center min-w-fit mr-4"
          onClick={() => changeContent(game.name)}
        >
          <img src={game.image} className="mr-1 w-[28px] h-[27px]" alt="" />
          <span
            className={`${
              defaultValue === game.name ? "font-bold" : ""
            } text-lg whitespace-nowrap relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-black after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100`}
          >
            {game.name}
          </span>
        </div>
      ))}
    </div>
  );
}
