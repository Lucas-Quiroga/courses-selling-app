import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Data from "@/json/Testimonials.json";

const Testimonials = () => {
  return (
    <section className="relative items-center flex ">
      <div className="container mt-10 px-6 mx-auto">
        <div className="container px-6  mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
                Testimonios de alumnos
              </h1>
            </div>
          </div>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
        </div>
        <Marquee>
          {Data.map((testimonials, index) => (
            <div className="container px-6 py-10 mx-auto" key={index}>
              <section className="flex justify-center max-w-md mb max-h-full ">
                <div
                  className="p-8 mb-0 border rounded-lg flex flex-col justify-between h-full w-100 "
                  key={index}
                >
                  <p className="leading-loose text-gray-500 dark:text-gray-200">
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
                      <h1 className="font-semibold text-gray-800 dark:text-gray-200">
                        {testimonials.name}
                      </h1>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials.role}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
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
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
