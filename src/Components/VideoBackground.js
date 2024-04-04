import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movie_id }) => {
const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    const dispatch = useDispatch();

    // const [trailerId,setTrailerId ] = useState(null)
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/823464/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <>
      <div>
        <iframe
          width="560"
          height="315"
        //   src={"https://www.youtube.com/embed/" + trailerId}
        src={"https://www.youtube.com/embed/" + trailerVideo?.key }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
