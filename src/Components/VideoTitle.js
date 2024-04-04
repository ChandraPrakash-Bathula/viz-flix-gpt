const VideoTitle = ({title, overview}) => {
  return (
   <>
   <div className='text-sky-900 pt-36 px-12'>
   <h1 className="font-bold text-3xl">{title}</h1>
   <p className="py-6 text-lg w-1/2">{overview}</p>
   <div>
    <button className="bg-gray-600 text-white p-4 px-8 text-lg bg-opacity-50 rounded-lg ">▶️ Play</button>
    <button className="bg-gray-600 text-white p-4 px-8 text-lg bg-opacity-50 rounded-lg mx-2">More Info</button>
   </div>
   </div>
   </>
  )
}

export default VideoTitle