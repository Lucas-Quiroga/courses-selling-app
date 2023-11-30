"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { RadioButtons } from ".";
import { usePathname } from "next/navigation";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  courses.image = courses.image ? courses.image : "/cardimg.png";

  const pathname = usePathname();

  const router = useRouter();

  const generateRating = (rating: number) => {
    if (rating < 1 || rating > 5) {
      return null;
    }

    const stars = (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index}>
            {index < rating ? <AiFillStar /> : <AiOutlineStar />}
          </div>
        ))}
      </div>
    );

    return stars;
  };

  // Función para calcular el precio más caro
  const calculateOriginalPrice = (price: number): number => {
    // Puedes agregar lógica aquí para calcular el precio más caro, por ejemplo, sumar un porcentaje
    // Aquí se asume un incremento del 50% como ejemplo
    const originalPrice = price + price * 0.2;
    return originalPrice;
  };

  // const showTooltip = (index: number) => {
  //   setTooltipIndex(index);
  // };

  // const hideTooltip = () => {
  //   setTooltipIndex(null);
  // };

  return (
    <div>
      {/* <div className="flex items-center flex-col">
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
      </div> */}

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {courses.map((course: CardsProps, index: any) => {
          const formattedPrice = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(course.price || 220);

          // Calcular el precio más caro
          const originalPrice = calculateOriginalPrice(course.price || 220);
          const formattedOriginalPrice = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(originalPrice);

          return (
            <div
              key={course._id}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
              // onMouseOver={() => showTooltip(index)}
              // onMouseOut={hideTooltip}
            >
              <a onClick={() => router.push(`/Courses/${course._id}`)}>
                <img
                  src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="h-25 w-25 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {course.name}
                  </p>
                  {/* <div className="flex mt-2 item-center">
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
                  </div> */}
                  <div className="flex mt-2 item-center">
                    {generateRating(4)}
                  </div>
                  <div className="flex items-center justify-between ">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {formattedPrice} ARS
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        {formattedOriginalPrice}
                      </p>
                    </del>

                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="my-1 flex justify-between items-center">
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
                      <p className="text-sm">
                        {course.duration || "1:34:23 Minutes"}
                      </p>
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
                      <p className="text-sm">3 Parts</p>
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
                      <p className="text-sm">{course.level || "not level"}</p>
                    </div>
                  </div>

                  {tooltipIndex === index && (
                    <div className="z-20 rounded-xl absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-5 flex items-center justify-center">
                      <a
                        tabIndex={0}
                        role="link"
                        aria-label="tooltip 1"
                        className="focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200 relative mt-20 md:mt-0 over"
                        // onMouseOut={hideTooltip}
                        // onBlur={hideTooltip}
                      >
                        <div className="cursor-pointer">
                          <svg
                            aria-haspopup="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-info-circle"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#A0AEC0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {/* SVG path here */}
                          </svg>
                        </div>
                        <div
                          id="tooltip1"
                          role="tooltip"
                          className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-32 ml-8 shadow-lg bg-white p-4 rounded"
                        >
                          <svg
                            className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
                            width="9px"
                            height="16px"
                            viewBox="0 0 9 16"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* SVG path here */}
                          </svg>
                          <p className="text-sm font-bold text-gray-800 pb-1">
                            {course.name}
                          </p>
                          <p className="text-xs leading-4 text-gray-600 pb-3">
                            {course.description}
                          </p>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <span className="text-xs font-bold text-indigo-700">
                                Step 1 of 4
                              </span>
                            </div>
                            <div className="flex items-center">
                              <button className="focus:outline-none focus:text-gray-400 text-xs text-gray-600 underline mr-2 cursor-pointer">
                                Skip Tour
                              </button>
                              <button
                                // onBlur={hideTooltip}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-400 focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Cards;
