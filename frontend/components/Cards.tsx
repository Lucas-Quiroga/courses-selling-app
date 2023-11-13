"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RadioButtons } from ".";
import { usePathname } from "next/navigation";

interface CardsProps {
  image: string;
  name: string;
  description: string;
  price: number;
  _id: number;
  duration: string;
  level: string;
}

const Cards = ({ courses }: any) => {
  courses.image = courses.image ? courses.image : "/cardimg.png";
  const pathname = usePathname();

  const router = useRouter();

  return (
    <div className="flex items-center flex-col">
      <div className={`${pathname === "/" ? "hidden" : ""}`}>
        <RadioButtons />
      </div>

      <div className="flex flex-wrap justify-center overflow-hidden items-center gap-5 my-5">
        {courses.map((course: CardsProps) => {
          const formattedPrice = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(course.price || 220);

          return (
            <div
              key={course._id}
              className="flex flex-col max-w-xs justify-center overflow-hidden bg-white rounded-lg shadow-lg h-100 h-full"
            >
              <Image
                className="bg-cover"
                alt="course"
                src={course.image ? course.image : "/banner1.png"}
                width={1000}
                height={800}
              />

              <div className="w-3/3 p-4 md:p-4">
                <h1 className="text-lg font-bold text-gray-800 ">
                  {course.name || "Noteworthy technology acquisitions 2021"}
                </h1>

                <p className="mt-2 text-sm text-gray-600 ">
                  {course.description || "lorem lorem lorem lorem"}
                </p>

                <div className="flex mt-2 item-center">
                  <svg
                    className="w-5 h-5 text-gray-700 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-gray-700 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-gray-700 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>

                <div className="flex justify-between mt-3 item-center">
                  <h1 className="text-lg font-bold text-gray-700 md:text-xl">
                    {formattedPrice} ARS
                  </h1>
                </div>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>{course.duration || "1:34:23 Minutes"}</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#741f7a"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z"
                            stroke="#4f46e5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
                            stroke="#4f46e5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M21.4 15V9"
                            stroke="#4f46e5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </g>
                      </svg>
                    </span>
                    <p>{course.level || "not level"}</p>
                  </div>
                  <div>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">
                      Buy Lesson
                    </button>
                    <button
                      onClick={() => router.push(`/Courses/${course._id}`)}
                      className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 "
                    >
                      Learn More
                    </button>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
