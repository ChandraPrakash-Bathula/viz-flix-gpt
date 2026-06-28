import React, { useState } from "react";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchGuide from "./GptSearchGuide";
import Template from "../assets/Flix-Template.jpg";

const GptSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const movieNames = useSelector((store) => store?.gpt?.movieNames);

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setTriggerSearch(true);
  };

  return (
    <>
      <div className="fixed -z-10">
        <img className="w-full h-screen object-cover" src={Template} alt="background" />
      </div>
      <div className="pb-12">
        <GptSearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          triggerSearch={triggerSearch}
          setTriggerSearch={setTriggerSearch}
        />
        {movieNames ? (
          <GptMovieSuggestions />
        ) : (
          <GptSearchGuide onSuggestionClick={handleSuggestionClick} />
        )}
      </div>
    </>
  );
};

export default GptSearch;
