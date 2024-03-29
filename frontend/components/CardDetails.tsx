"use client";
import React from "react";
import { useRouter } from "next-nprogress-bar";
import { MdOndemandVideo } from "react-icons/md";
import { CardDetailsProps } from "@/types";

const CardDetails = ({ course }: CardDetailsProps) => {
  const router = useRouter();

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(course.price);

  return (
    <>
      <section className="bg-indigo-500">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src={course.thumbnail}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 break-words">
              <h3 className="text-sm title-font uppercase text-white tracking-widest">
                {course.format}
              </h3>
              <h2 className="text-3xl text-white font-bold sm:text-4xl">
                {course.name}
              </h2>

              <p className="mt-4 text-white ">{course.description}</p>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex justify-between align-bottom mr-5 mt-8">
                <span className="font-bold text-4xl text-white leading-none align-baseline">
                  {formattedPrice} ARS
                </span>
                <button
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-800 hover:bg-indigo-900"
                  onClick={() =>
                    router.push(
                      `/Courses/${course._id}/checkout`,
                      {},
                      { showProgressBar: true }
                    )
                  }
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 pb-[4rem] sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className=" max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl uppercase font-bold sm:text-4xl">
                detalles
              </h2>

              <div className="mt-4">
                <div className="mt-4 break-words">
                  <p className="my-8">{course.details}</p>
                  <ul className="space-y-2 text-md flex items-center mx-auto justify-between w-100">
                    <li className="text-gray-400">
                      <div className="flex items-center flex-col justify-center mx-auto">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-indigo-600 mb-1.5 mr-1"
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
                        <p className="text-md text-gray-600">
                          Duración del curso: <b> {course.duration} </b>
                        </p>
                      </div>
                    </li>
                    <li className="text-gray-400">
                      <div className="flex items-center flex-col justify-center mx-auto">
                        <MdOndemandVideo className="h-6 w-6 text-indigo-600 mb-1.5 mr-1" />
                        <p className="text-md text-gray-600">
                          Cantidad de videos: <b>{course.videos}</b>
                        </p>
                      </div>
                    </li>
                    <li className="text-gray-400">
                      <div className="flex items-center flex-col justify-center mx-auto">
                        <span>
                          <svg
                            className="h-6 w-6 text-indigo-600 mb-1.5 mr-1"
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
                        <p className="text-md text-gray-600">
                          Nivel del curso: <b> {course.level}</b>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {course.highlights
                .filter((highlight) => highlight.trim() !== "")
                .map((highlight, index) => (
                  <div
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    key={index}
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      {highlight}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* gift of beer */}
      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div> */}
    </>
  );
};

export default CardDetails;
