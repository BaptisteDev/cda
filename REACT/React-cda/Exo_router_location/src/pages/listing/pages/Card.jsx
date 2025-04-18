const Card = ({ listing }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-64 cursor-pointer">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{listing.title}</h3>
      <p className="text-gray-500">{listing.location}</p>
      <p className="text-red-500 font-bold mt-1">{listing.price} € / nuit</p>
    </div>
  );
};

export default Card;
