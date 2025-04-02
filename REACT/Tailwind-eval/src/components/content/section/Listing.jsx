import React from "react";

export default function Listing({ listing }) {
  const listings = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Villa de Luxe",
      location: "Nice, France",
      price: "250",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Chalet Montagne",
      location: "Chamonix, France",
      price: "180",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Bohème",
      location: "Bordeaux, France",
      price: "120",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Loft Design",
      location: "Paris, France",
      price: "300",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cabane en forêt",
      location: "Lille, France",
      price: "90",
    },
  ];
  return (
    <>
      <h2 className="font-medium text-2xl mb-1">Logements disponibles</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
        {listings.map((listing) => (
          <div className="card bg-white shadow-2xl mr-5 rounded-3xl r min-w-65 max-w-65">
            <a href="#">
              <img
                className="pt-5 pr-5 pl-5 max-h-45 min-h-45 w-full object-cover rounded-3xl"
                src={listing.image}
                alt={listing.title}
              />
              <div className="m-5">
                <p className="font-bold">{listing.title}</p>
                <p className="text-stone-600">{listing.location}</p>
                <p className="text-red-600 font-medium">
                  {listing.price} €/nuit
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
