import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

const languageKey = useSelector(store => store.config.language)

  return (
    <>
    <div className="pt-[10%] flex justify-center">
      
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder=  {language[languageKey].gptSearchPlaceholder}
        ></input>
        <button className="py-2 px-4 rounded-lg bg-red-600 text-white col-span-3 m-4">
          {language[languageKey].search}
        </button>
      </form>
    </div>
    </>
  );
};

export default GptSearchBar;
