import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Template from "../assets/Flix-Template.jpg"

const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-10">
    <img src={Template} alt="background" />
  </div>
      <GptSearchBar />
      <GptMovieSuggestions />

      {/* Gpt Search Bar
Gpt Movie Suggestions */}
    </div>
  );
};

export default GptSearch;
