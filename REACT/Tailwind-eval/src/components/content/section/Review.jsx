import React from "react";

export default function Review({ review }) {
  return (
    <>
      <a
        href="#"
        className="card w-full hover: mb-3 md:w-1/3 lg:1/3 p-5 transition-transform duration-300 hover:scale-105 bg-white shadow-2xl mr-5 rounded-xl"
      >
        <p className="font-medium">{review.name}</p>
        <p className="text-stone-600">{review.review}</p>
      </a>
    </>
  );
}
