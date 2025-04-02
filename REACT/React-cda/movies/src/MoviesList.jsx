import React, { useEffect, useState } from "react";
import movies from "./data.json";
import Movie from "./Movie";

const MoviesList = () => {
  const [title, setTitle] = useState(""); // let title = "";
  const [like, setLike] = useState(0); // let like = 0;
  const [search, setSearch] = useState(""); // let search = "";

  // fonction pour récupérer le titre du film
  function handleClick(e, name) {
    e.stopPropagation(); // empêche la propagation de l'événement au parent
    console.log(name);
    setTitle(name);
  }

  // fonction pour récupérer la saisi de l'input
  function searchMovie(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  // fonction qui incrémente le compteur de like
  function addLike() {
    setLike(like + 1);
  }
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h2 className="text-xl text-[#b20710]">
          Brad Pitt Movies <span className="text-white">Likes : {like}</span>
        </h2>
        <input
          type="text"
          className="w-96 outline-1 placeholder:pl-1.5 rounded-lg  focus:outline-[#b20710]"
          placeholder="Search ..."
          onChange={(e) => searchMovie(e)}
        />
        <h2 className="text-xl text-[#b20710] w-[300px]">
          Titre du film <span className="text-white">{title}</span>
        </h2>
      </div>
      <ul className="flex flex-wrap">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              searchName={handleClick}
              addLike={addLike}
            />
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
