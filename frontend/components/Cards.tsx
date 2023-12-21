"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
// import { RadioButtons } from ".";
import { usePathname } from "next/navigation";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { CardsProps } from "@/types";
import { FaUserGraduate, FaLongArrowAltLeft } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

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
    const originalPrice = price * 1.2; // Aumento del 20%
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
      <section className="flex flex-wrap w-fit justify-start gap-y-20 gap-x-14 mt-10 mb-5">
        {courses.map((course: CardsProps, index: any) => {
          const formattedPrice = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(course.price);

          // Calcular el precio más caro
          const originalPrice = calculateOriginalPrice(course.price);
          const formattedOriginalPrice = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(originalPrice);

          return (
            <div>
              {/* CARD ANTERIOR */}
              {/* <div
                key={course._id}
                className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-slate-700"
                // onMouseOver={() => showTooltip(index)}
                // onMouseOut={hideTooltip}
              >
                <a
                  onClick={() =>
                    router.push(
                      `/Courses/${course._id}`,
                      {},
                      {
                        showProgressBar: true,
                      }
                    )
                  }
                >
                  <img
                    src={course.thumbnail}
                    alt="Product"
                    className="h-72 w-full object-contain rounded-t-xl"
                  />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs dark:text-gray-200">
                      {course.format}
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize dark:text-white">
                      {course.name}
                    </p>

                    <div className="flex mt-2 item-center">
                      {generateRating(4)}
                    </div>
                    <div className="flex items-center justify-between ">
                      <p className="text-lg font-semibold text-black cursor-auto my-3 dark:text-white">
                        {formattedPrice} ARS
                      </p>
                      <div className="ml-8">
                        <FaLongArrowAltLeft
                          className="h-5 w-5"
                          color={"white"}
                        />
                      </div>
                      <del className="dark:text-gray-200">
                        <p className="text-sm text-gray-600 cursor-auto ml-2 dark:text-gray-300">
                          {formattedOriginalPrice}
                        </p>
                      </del>
                    </div>
                    <div className="my-1 flex justify-between items-center">
                      <div className="flex space-x-1 items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white"
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
                        <p className="text-sm dark:text-white">
                          {course.duration}
                        </p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <MdOndemandVideo className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                        <p className="text-sm dark:text-white">
                          {course.videos} videos
                        </p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <FaUserGraduate className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                        <p className="text-sm dark:text-white">
                          {course.level}
                        </p>
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
              </div> */}

              {/* CARD NUEVA */}
              <div
                onClick={() =>
                  router.push(
                    `/Courses/${course._id}`,
                    {},
                    {
                      showProgressBar: true,
                    }
                  )
                }
                key={course._id}
              >
                <div className="group w-72 bg-white hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full duration-500 hover:scale-105 cursor-pointer">
                  <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt={course.name}
                      src={course.thumbnail}
                    />
                  </div>
                  <div className="flex flex-col pt-2">
                    <div className="text-3xl md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                      {course.name}
                    </div>
                    <p className="text-xs text-muted-foreground text-gray-400 uppercase dark:text-gray-200">
                      {course.format}
                    </p>

                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                      <div className="flex flex-col gap-x-1 text-slate-500">
                        <div className="flex space-x-1 items-center">
                          <MdOndemandVideo className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                          <p className="text-sm dark:text-white">
                            {course.videos} videos
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <FaGoogleDrive className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                          <p className="text-sm dark:text-white">
                            Google drive
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <FaUserGraduate className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                          <p className="text-sm dark:text-white">
                            {course.level}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <p className="text-md md:text-sm font-medium text-slate-700">
                        {formattedPrice} ARS
                      </p>
                      {/* <div className="ml-8">
                        <FaLongArrowAltLeft
                          className="h-5 w-5"
                          color={"white"}
                        />
                      </div>
                      <del className="dark:text-gray-200">
                        <p className="text-md md:text-sm font-medium text-slate-700">
                          {formattedOriginalPrice}
                        </p>
                      </del> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Cards;
