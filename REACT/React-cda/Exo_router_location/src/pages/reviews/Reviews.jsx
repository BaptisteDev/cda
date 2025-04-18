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

const Reviews = () => {
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Avis Clients</h2>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex-1"
          >
            <p className="font-semibold">{r.name}</p>
            <p className="text-gray-600 mt-2">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
