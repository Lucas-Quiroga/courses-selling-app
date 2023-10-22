import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-full p-0 m-0 flex justify-center items-center mx-auto">
        <Image
          src="/banner1.png"
          alt="banner"
          width={1584}
          height={396}
          className="bg-cover w-screen"
        />
      </div>
    </div>
  );
};

export default Banner;
