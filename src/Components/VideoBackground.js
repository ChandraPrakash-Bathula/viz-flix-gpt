import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
// import { useState } from "react";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(movie_id);

  return (
    <>
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          //   src={"https://www.youtube.com/embed/" + trailerId}
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
