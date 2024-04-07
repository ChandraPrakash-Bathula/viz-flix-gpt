import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Template from "../assets/Flix-Template.jpg"

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
    <img className="h-screen object-cover" src={Template} alt="background" />
  </div>
    <div className="">
     
      <GptSearchBar />
      <GptMovieSuggestions />
    </div></>
  );
};

export default GptSearch;
