import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearchGuide = ({ onSuggestionClick }) => {
  const languageKey = useSelector((store) => store.config.language);
  const langData = language[languageKey] || language.en;

  return (
    <div className="flex flex-col items-center justify-center pt-8 px-4 md:px-0">
      <div className="bg-black bg-opacity-85 text-white p-6 md:p-8 rounded-xl max-w-4xl w-full border border-gray-800 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-red-600/30">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-red-500 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
          {langData.guideTitle}
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Step 1 */}
          <div className="bg-zinc-900 bg-opacity-65 p-5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-amber-400 mb-2">
                {langData.guideStep1Title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {langData.guideStep1Desc}
              </p>
            </div>
            <div className="mt-4 text-xs text-zinc-500 italic">
              e.g. "Spooky space horror"
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-900 bg-opacity-65 p-5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-amber-400 mb-2">
                {langData.guideStep2Title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {langData.guideStep2Desc}
              </p>
            </div>
            <div className="mt-4 text-xs text-zinc-500 italic">
              Powered by OpenAI GPT
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-900 bg-opacity-65 p-5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-amber-400 mb-2">
                {langData.guideStep3Title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {langData.guideStep3Desc}
              </p>
            </div>
            <div className="mt-4 text-xs text-zinc-500 italic">
              Trailers via TMDB API
            </div>
          </div>
        </div>

        {/* Suggestion Chips */}
        {langData.suggestions && (
          <div className="border-t border-zinc-800 pt-6">
            <h4 className="text-zinc-300 font-medium mb-3 text-sm">
              {langData.suggestionTitle}
            </h4>
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
              {langData.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onSuggestionClick(suggestion)}
                  className="bg-zinc-800 hover:bg-red-700 hover:text-white text-zinc-300 text-xs font-medium py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 border border-zinc-700 hover:border-red-500 shadow-md"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearchGuide;
