import Card from "./pages/Card";

const listings = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Villa de Luxe",
    location: "Nice, France",
    price: "250",
    type: "Appartement",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Chalet Montagne",
    location: "Chamonix, France",
    price: "180",
    type: "Maison",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Maison Bohème",
    location: "Bordeaux, France",
    price: "120",
    type: "Maison",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Loft Design",
    location: "Paris, France",
    price: "300",
    type: "Maison",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cabane en forêt",
    location: "Lille, France",
    price: "90",
    type: "Appartement",
  },
];

const Listings = ({ home, mode }) => {
  console.log({ home });

  return (
    <section className="p-6">
      <div className="overflow-x-auto pb-4">
        <div
          className={`flex space-x-6 w-max ${
            home ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {listings.map((listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
