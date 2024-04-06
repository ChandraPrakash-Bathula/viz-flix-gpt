const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[20%] px-0 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        <p className="py-6 text-lg w-1/2 hidden md:inline-block">{overview}</p>
        <div>
          <button className="bg-white text-black p-4 px-8 text-lg hover:bg-opacity-8 0 rounded-lg ">
            ▶️ Play
          </button>
          <button className="bg-gray-600 text-white p-4 px-8 text-lg bg-opacity-50 rounded-lg mx-2">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
