import React from "react";

export default function Listing({ listing }) {
  return (
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
          <p className="text-red-600 font-medium">{listing.price} €/nuit</p>
        </div>
      </a>
    </div>
  );
}
