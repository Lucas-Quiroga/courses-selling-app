import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Data from "@/json/Testimonials.json";

const Testimonials = () => {
  return (
    <section className="relative items-center flex ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">
          Testimonios de <span className="text-blue-500 ">alumnos</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
          ¡Inspírate con sus experiencias y unite a nuestra comunidad de
          aprendizaje!
        </p>

        <Marquee>
          <div className="container px-6 py-10 mx-auto">
            <section className="grid grid-cols-3 grid-rows-1 gap-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
              {Data.map((testimonials, index) => (
                <div
                  className="p-8 border rounded-lg flex flex-col justify-between"
                  key={index}
                >
                  <p className="leading-loose text-gray-500 ">
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
                      <span className="text-sm text-gray-500">
                        {testimonials.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="p-8 border rounded-lg ">
                <p className="leading-loose text-gray-500 ">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                  <Image
                    className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 "
                    src="/teacher2.png"
                    alt="teacher2"
                    width={880}
                    height={880}
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 ">Jeny Doe</h1>
                    <span className="text-sm text-gray-500">
                      CEO, Jeny Consultency
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 border rounded-lg ">
                <p className="leading-loose text-gray-500 ">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                  <Image
                    className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 "
                    src="/teacher2.png"
                    alt="teacher2"
                    width={880}
                    height={880}
                  />

                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 ">
                      Ema Watson{" "}
                    </h1>
                    <span className="text-sm text-gray-500">
                      Marketing Manager at Stech
                    </span>
                  </div>
                </div>
              </div> */}
            </section>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
