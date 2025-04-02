export default function ActorCard({ actor, onChangeYear }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="https://www.bebadass.fr/wp-content/uploads/2023/07/1688548564_Ce-que-Brad-Pitt-fait-pour-etre-aussi-beau-a.jpg"
          alt={actor.name}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {actor.name}
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>Birth Date: {actor.birthDate}</p>
            <p>Country: {actor.country}</p>
            <p>Age: {actor.age}</p>
          </div>

          <div className="mt-4 space-y-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={onChangeYear}
            >
              Increment Age
            </button>
            <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Change First Award Status
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Awards</h3>
            <div className="space-y-3">
              {actor.awards.map((award, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-medium text-gray-800">{award.movie}</p>
                  <p className="text-sm text-gray-600">
                    {award.title} ({award.year}) -
                    <span
                      className={
                        award.status === "Winner"
                          ? "text-green-600"
                          : "text-blue-600"
                      }
                    >
                      {award.status}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
