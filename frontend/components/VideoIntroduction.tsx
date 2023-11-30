"use client";
import React from "react";
import { useRouter } from "next/navigation";

const VideoIntroduction = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Utiliza el método back() para volver a la página anterior
  };
  return (
    <>
      <video className="flex m-auto my-6 rounded-lg" controls>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handleGoBack}
        className="m-auto justify-center flex mb-4 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Volver
      </button>
    </>
  );
};

export default VideoIntroduction;
