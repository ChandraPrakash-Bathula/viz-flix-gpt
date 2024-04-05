import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, poster_path }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-white text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
