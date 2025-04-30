import React, { useContext } from "react";
import { ServerContext } from "../../../context/ServerContext";
export default function ListServer() {
  // On récupére notre context server
  const { displayedList } = useContext(ServerContext);
  return (
    <div className="md:flex md:flex-wrap md:justify-between md:gap-x-6">
      {displayedList.map((server) => (
        <div
          key={server.id}
          className="border mt-[58px] gap-x-6 rounded-tl-lg rounded-tr-lg w-full h-auto p-4 md:w-[48%] lg:w-[31%]"
        >
          <div className="flex justify-between items-center relative">
            <div className=" flex items-center">
              <img src={server.image} className="mr-2" alt={server.name} />
              <p>{server.name} - Dev</p>
            </div>
            <div className="h-[40px]">
              {server.promo === "on" ? (
                <div className="flex flex-col items-center">
                  <p className="font-light line-through">{server.price} €</p>
                  <p className="font-medium text-2xl">
                    {Number(server.price) - 1} €
                  </p>
                  <img
                    src="/src/assets/images/icons/reduction.svg"
                    className="absolute mt-[-76px] rotate-[-93deg] ml-[-3px]"
                    alt="reduction"
                  />
                </div>
              ) : (
                <p className="font-medium text-2xl">{server.price} €</p>
              )}
            </div>
          </div>
          <div className="mt-[20px] mb-[20px]">
            <p>{server.description}</p>
          </div>
          <div className="flex flex-col">
            {server.specs.map((spec, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={spec.icon}
                  className="mr-2 w-[35px]"
                  alt={spec.text}
                />
                <p>{spec.text}</p>
              </div>
            ))}
          </div>
          <div className="btn-pink cursor-pointer">Louer</div>
        </div>
      ))}
    </div>
  );
}
