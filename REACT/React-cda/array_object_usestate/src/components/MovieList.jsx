export default function MovieList({ movies, addMovie, onDeleteMovie }) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Movies</h2>
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
          onClick={addMovie}
        >
          Add Troy Movie
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {movie.title}
              </h3>
              <p className="text-gray-600">{movie.year}</p>
              <p className="text-sm text-gray-500 mt-2">{movie.summary}</p>
              <button
                className="mt-4 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
                onClick={() => onDeleteMovie(movie.id)}
              >
                Delete Movie
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
