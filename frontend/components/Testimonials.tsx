import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Data from "@/json/Testimonials.json";

const Testimonials = () => {
  return (
    <section className="relative items-center flex ">
      <div className="container mt-10 mx-auto">
        <div className="mx-auto ">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl text-center md:text-left font-semibold text-gray-800  ">
                Testimonios de alumnos
              </h3>
            </div>
          </div>
          <hr className="my-8 border-gray-200 " />
        </div>
        <Marquee pauseOnHover>
          {Data.map((testimonials, index) => (
            <div className="container px-6 py-5 mx-auto" key={index}>
              <section className="flex justify-center max-w-md mb max-h-full ">
                <div
                  className="p-8 mb-0 border rounded-lg flex flex-col justify-between h-full w-100 bg-white"
                  key={index}
                >
                  <p className="leading-loose text-black ">
                    “{testimonials.description}”.
                  </p>

                  <div className="flex items-center mt-8 -mx-2">
                    <Image
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 "
                      src={testimonials.image}
                      alt="teacher2"
                      width={880}
                      height={880}
                    />

                    <div className="mx-2">
                      <h1 className="font-semibold text-gray-800 ">
                        {testimonials.name}
                      </h1>
                      <span className="text-sm text-gray-500 ">
                        {testimonials.role}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
