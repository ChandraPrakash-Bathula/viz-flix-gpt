import { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.language);

  const searchText = useRef(null);

  //searching Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      //  https://api.themoviedb.org/3/search/movie?query=Khaleja&include_adult=false&language=en-US&page=1

      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchclick = async () => {
    console.log(searchText.current.value);
    //Make a call to openAI Gpt API and get movie results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      searchText.current.value +
      ". And only give me names of 5 movies, in a comma seperated way like the example result given ahead. Example Result : Shankar Dada MBBS, King, Sholay, Gadar, Khaleja. ";

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptSearchResults.choices[0]?.message?.content);

    if (!gptSearchResults.choices[0]?.message?.content) return "error";

    const gptMovies = gptSearchResults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbresults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbresults })
    );
  };

  return (
    <>
      <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form
          className="bg-black w-full md:w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={language[languageKey].gptSearchPlaceholder}
          ></input>
          <button
            className="py-2 px-4 rounded-lg bg-red-600 text-white col-span-3 m-4"
            onClick={handleGptSearchclick}
          >
            {language[languageKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
