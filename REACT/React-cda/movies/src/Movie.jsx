import React from "react";
import { AiFillLike } from "react-icons/ai";

export default function Movie({ movie, searchName, addLike }) {
  return (
    <li
      className="flex shadow-lg rounded-xl p-4 w-80 cursor-pointer m-4 bg-[#141414] text-white"
      onClick={addLike}
    >
      <div className="flex-grow">
        <h2 className="text-xl mb-2">
          {movie.title} ({movie.year})
        </h2>
        <img
          src={movie.posterUrl}
          alt={`${movie.title} Poster`}
          className="w-56 mb-2"
          onClick={(e) => searchName(e, movie.title)}
        />
        <p>
          <strong className="text-gray-500">Director:</strong> {movie.director}
        </p>
        <p>
          <strong className="text-gray-500">IMDb Rating:</strong>{" "}
          {movie.imdbRating}
        </p>
        <p>
          <strong className="text-gray-500">Genres:</strong>{" "}
          {movie.genres.join(", ")}
        </p>
        <p>
          <strong className="text-gray-500">Actors:</strong>{" "}
          {movie.actors.join(", ")}
        </p>
        <p className="line-clamp-3">
          <strong className="text-gray-500">Summary:</strong> {movie.summary}
        </p>
      </div>
      <div className="flex flex-row items-end">
        <AiFillLike className="text-xl text-green-500" />
      </div>
    </li>
  );
}
