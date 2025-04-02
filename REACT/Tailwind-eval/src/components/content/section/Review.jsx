import React from "react";

export default function Review({ review }) {
  const reviews = [
    {
      id: 1,
      name: "Sophie L.",
      review: "Super séjour ! Maison très propre et bien située.",
    },
    {
      id: 2,
      name: "Thomas B.",
      review: "Hôte très sympathique, je recommande à 100% !",
    },
    { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
  ];
  return (
    <>
      <div className="mt-10">
        <h2 className="font-medium text-2xl mb-1">Avis Clients</h2>
        <div className="flex flex-col md:flex-row lg:flex-row">
          {reviews.map((review) => (
            <a
              href="#"
              className="card w-full hover: mb-3 md:w-1/3 lg:1/3 p-5 transition-transform duration-300 hover:scale-105 bg-white shadow-2xl mr-5 rounded-xl"
            >
              <p className="font-medium">{review.name}</p>
              <p className="text-stone-600">{review.review}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
