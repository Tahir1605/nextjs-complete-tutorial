export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <video
          src="/video.mp4"
          controls
          loop
          className="rounded-xl shadow-lg w-[800px] max-w-full"
        />
      </div>

      <div className="flex justify-center items-center h-screen bg-gray-900 p-4">
        <iframe
          className="rounded-xl shadow-lg w-[800px] h-[450px] max-w-full"
          src="https://www.youtube.com/embed/UuGf9fYHOpo?rel=0&modestbranding=1&controls=1"
          allow="autoplay; encrypted-media"
          loop
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

