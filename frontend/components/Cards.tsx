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
        {courses.map((course: CardsProps) => (
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
                  {course.price || "$220"}
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
                  <p>1:34:23 Minutes</p>
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  <p>TypeScript</p>
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
        ))}
      </div>
    </div>
  );
};

export default Cards;
