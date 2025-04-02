import { useState } from "react";
import ActorCard from "./components/ActorCard";
import MovieList from "./components/MovieList";
import moviesData from "./data.json";

function App() {
  const [actor, setActor] = useState({
    name: "Brad Pitt",
    birthDate: "1963-12-18",
    country: "USA",
    age: 59,
    awards: [
      {
        title: "supporting role actor",
        year: 2020,
        movie: "Once upon a time ... in Hollywood",
        status: "Winner",
      },
      {
        title: "best picture producer",
        year: 2014,
        movie: "Twelve years a slave",
        status: "Winner",
      },
      {
        title: "leading role actor",
        year: 2012,
        movie: "Moneyball",
        status: "Nominee",
      },
    ],
  });

  const [movies, setMovies] = useState(moviesData.movies);

  const newMovie = {
    id: 6,
    title: "Troy",
    year: 2004,
    director: "Wolfgang Petersen",
    imdbRating: 7.3,
    genres: ["Action", "Drama", "History"],
    actors: ["Brad Pitt", "Eric Bana", "Orlando Bloom"],
    posterUrl:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/pkKBYrihVm5kuBgOH04KagSids0.jpg",
    summary:
      "An adaptation of Homer's epic, following the assault on Troy by the united Greek forces and the fates of the men involved.",
  };

  function changeYear() {
    setActor({ ...actor, age: actor.age + 1 });
  }

  function addMovie() {
    setMovies([...movies, newMovie]);
  }

  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <ActorCard actor={actor} onChangeYear={changeYear} />
        <MovieList
          movies={movies}
          addMovie={addMovie}
          onDeleteMovie={deleteMovie}
        />
      </div>
    </div>
  );
}

export default App;
