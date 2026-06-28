import { useState, useEffect } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = ({ searchText, setSearchText, triggerSearch, setTriggerSearch }) => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.language);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //searching Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchclick = async () => {
    if (!searchText || searchText.trim() === "") return;

    try {
      setLoading(true);
      setError(null);

      if (!OPENAI_KEY || OPENAI_KEY.trim() === "" || OPENAI_KEY.startsWith("YOUR_")) {
        throw new Error(
          "OpenAI API Key is missing. Please configure your REACT_APP_OPENAI_KEY in the environment or .env file."
        );
      }

      const gptQuery =
        "Act as a Movie Recommendation System and suggest some movies for the query :" +
        searchText +
        ". And only give me names of 5 movies, in a comma seperated way like the example result given ahead. Example Result : Shankar Dada MBBS, King, Sholay, Gadar, Khaleja. ";

      const gptSearchResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!gptSearchResults.choices[0]?.message?.content) {
        throw new Error("No movie suggestions found from OpenAI.");
      }

      const gptMovies = gptSearchResults?.choices[0]?.message?.content
        .split(",")
        .map((m) => m.trim())
        .filter((m) => m.length > 0);

      if (gptMovies.length === 0) {
        throw new Error("Failed to parse movie titles from OpenAI response.");
      }

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbresults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbresults })
      );
    } catch (err) {
      console.error(err);
      setError(err?.message || "An unexpected error occurred during GPT search.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (triggerSearch) {
      handleGptSearchclick();
      setTriggerSearch(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerSearch]);

  return (
    <div className="pt-[35%] md:pt-[10%] flex flex-col items-center px-4 w-full">
      <form
        className="bg-black bg-opacity-80 w-full md:w-1/2 grid grid-cols-12 rounded-lg border border-zinc-800 focus-within:border-red-600 transition-all duration-300 shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:border-red-600 text-sm md:text-base transition duration-200"
          placeholder={language[languageKey].gptSearchPlaceholder}
          disabled={loading}
        />
        <button
          className="py-2 px-2 md:px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white col-span-3 m-4 font-semibold text-sm md:text-base flex items-center justify-center transition duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          onClick={handleGptSearchclick}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-1.5">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : (
            language[languageKey].search
          )}
        </button>
      </form>
      {error && (
        <div className="bg-red-950/80 border border-red-500 text-red-200 px-4 py-3 rounded-lg mt-4 max-w-lg w-full text-center text-xs md:text-sm shadow-xl backdrop-blur-sm animate-pulse flex items-center justify-center gap-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
