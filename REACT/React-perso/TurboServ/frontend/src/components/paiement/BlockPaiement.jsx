import React, { useContext } from "react";
import serverGames from "../../data/GameList.json";
import { PaiementContext } from "../../context/PaiementContext";

export default function BlockPaiement() {
  const { changeServer, server, priceServer } = useContext(PaiementContext);
  return (
    <form className="mt-8">
      <div className="flex flex-wrap items-center justify-center">
        <button className="border py-2 px-10 rounded cursor-pointer hover:bg-black hover:text-white transition mr-3 mb-3">
          1 mois
        </button>
        <button className="border py-2 px-10 rounded cursor-pointer hover:bg-black hover:text-white transition mr-3 mb-3">
          3 mois - 5%
        </button>
        <button className="border py-2 px-10 rounded cursor-pointer hover:bg-black hover:text-white transition mr-3 mb-3">
          6 mois - 10%
        </button>
        <button className="border py-2 px-10 rounded cursor-pointer hover:bg-black hover:text-white transition mr-3 mb-3">
          1 an - 20%
        </button>
      </div>
      <div className="mt-4 lg:flex">
        <div className="bg-primary flex flex-col justify-center p-4 lg:w-[550px]">
          <div className="flex items-center h-[35px]">
            <span className="bg-white p-1 w-[30px] flex justify-center mr-3">
              1
            </span>
            <p className="text-white font-bold">Serveur de jeux</p>
          </div>
          <div className="mt-10 flex flex-col">
            <label for="serverGames" className="text-white mb-2">
              Serveur de jeux :
            </label>
            <select
              id="serverGames"
              className="bg-white text-black border border-gray-300 rounded p-2 cursor-pointer"
              onChange={(e) => changeServer(e.target.value)}
            >
              <option value="">-- Choisir --</option>
              {serverGames.map((server) => (
                <option
                  value={JSON.stringify(server)}
                  className="cursor-pointer"
                >
                  {server.name}
                </option>
              ))}
            </select>
            <label for="serverGames" className="text-white mb-2 mt-3">
              Modèles :
            </label>
            <select
              id="serverGames"
              className="bg-white text-black border border-gray-300 rounded p-2 cursor-pointer"
            >
              <option value="">-- Choisir --</option>
              {serverGames.map((server) => (
                <option value="minecraft" className="cursor-pointer">
                  {server.name}
                </option>
              ))}
            </select>
            <div className="flex justify-center mt-5">
              <p className="text-white text-center">Aucune limite de joueur</p>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:m-0 bg-secondary p-4  lg:flex lg:items-start">
          <div className="lg:w-1/3 p-5">
            <div className="flex items-center h-[35px]">
              <span className="bg-white p-1 w-[30px] flex justify-center mr-3">
                1
              </span>
              <p className="text-black font-bold">Fonctionnalités</p>
            </div>
            <div className="mt-3 w-full">
              <select
                id="serverGames"
                className="mt-3 bg-white text-black border border-gray-300 rounded p-2 cursor-pointer w-full"
              >
                <option value="">-- Choisir de la ram --</option>
                <option value="ram" className="cursor-pointer">
                  32 go ram + 5.99€
                </option>
              </select>
              <select
                id="serverGames"
                className="mt-3 bg-white text-black border border-gray-300 rounded p-2 cursor-pointer w-full"
              >
                <option value="">-- Choisir du stockage --</option>
                <option value="stockage" className="cursor-pointer">
                  32 go de stockage + 5.99€
                </option>
              </select>
              <select
                id="serverGames"
                className="mt-3 bg-white text-black border border-gray-300 rounded p-2 cursor-pointer w-full"
              >
                <option value="">-- Choisir votre localisation --</option>
                <option value="france" className="cursor-pointer">
                  France
                </option>
              </select>
              <p className="mt-6 mb-2">CPU : Ryzen 5 3600x, 4.0 Ghz</p>
            </div>
          </div>
          <div className="lg:w-1/3 p-5 flex flex-col justify-end">
            <div className="flex items-center mt-10 lg:m-0 h-[35px]">
              <p className="text-black font-bold">En plus</p>
            </div>
            <div className="mt-3 w-full">
              <select
                id="serverGames"
                className="mt-3 bg-white text-black border border-gray-300 rounded p-2 cursor-pointer w-full"
              >
                <option value="">-- Choisir une IP --</option>
                <option value="ip" className="cursor-pointer">
                  IP dédié + 2.99€
                </option>
              </select>

              <input
                type="text"
                id="promo"
                name="promo"
                className="bg-white text-black border border-gray-300 rounded p-2 focus:border-primary  w-full mt-3"
                placeholder="Code promo"
              />
              <input
                type="text"
                id="promo"
                name="promo"
                className="bg-white text-black border border-gray-300 rounded p-2 focus:border-primary  w-full mt-3"
                placeholder="Code de parrainage"
              />
            </div>
          </div>
          <div className="lg:w-1/3 p-5  flex flex-col justify-end">
            <div className="flex items-center justify-end mt-10 lg:m-0 h-[35px]">
              <p className="text-black font-bold">Prix</p>
            </div>
            <div className="">
              <div className="mt-3 w-full flex justify-between">
                <div className="">
                  <p className="font-medium my-2">Serveur de jeux :</p>
                  <p className="font-medium my-2">Modèle :</p>
                  <p className="font-medium my-2">Ram :</p>
                  <p className="font-medium my-2">Stockage :</p>
                  <p className="font-medium my-2">IP dédié :</p>
                  <p className="font-bold my-4">TOTAL :</p>
                </div>
                <div className="">
                  <p className="my-2">{priceServer}</p>
                  <p className="my-2">40.00€</p>
                  <p className="my-2">5.99€</p>
                  <p className="my-2">5.99€</p>
                  <p className="my-2">2.99€</p>
                  <p className="font-bold my-4">94,97€</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="btn-pink w-[150px] cursor-pointer">
                  Payer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
