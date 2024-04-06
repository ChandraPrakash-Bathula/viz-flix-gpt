import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, poster_path }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-white text:lg md:text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
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
