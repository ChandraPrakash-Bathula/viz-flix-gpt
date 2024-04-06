import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movie_id) => {
  const dispatch = useDispatch();

  // const [trailerId,setTrailerId ] = useState(null);

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  //fetch trailer video and update the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo &&  getMovieVideos();
  }, []);
};

export default useTrailerVideo;
