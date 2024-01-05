"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/coreComponents/Loading";
import { getCourses } from "@/coreComponents/helper/apiCalls";
import { Cards, Filters } from "@/components";
import { CourseType1 as Course } from "@/types/index";
import { Categories } from "@/components";
import { OffCanvas } from "@/components";
import { Testimonials } from "@/components";
import Spinner from "@/coreComponents/Spinner";

// import axios from "axios";

const Hero = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true); //indicador de carga.
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState({ price: "", duration: "", level: "" });
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  // Obtener los primeros 5 cursos
  const initialCourses = courses.slice(0, 5);

  // Manejar la visualización de más cursos
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Maneja los cambios en los filtros cuando el usuario realiza alguna acción que modifica los criterios de filtrado
  const handleFilterChange = (newFilter: any) => {
    setFilter(newFilter);

    if (newFilter) {
      const filtered = courses.filter((course) => {
        return (
          (newFilter.price === "" ||
            course.price <= parseInt(newFilter.price)) &&
          (newFilter.duration === "" ||
            course.duration === newFilter.duration) &&
          (newFilter.level === "" || course.level === newFilter.level)
        );
      });
      // Actualizar el estado con los cursos filtrados
      setFilteredCourses(filtered);
    }
  };

  // Efecto para cargar los cursos cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Muestra el spinner al iniciar la carga
        const coursesData = await getCourses();
        setCourses(coursesData);
        setLoading(false); // Oculta el spinner cuando los cursos se han cargado
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Actualizar los cursos filtrados cuando cambia el filtro o se cargan los cursos
  useEffect(() => {
    if (filter) {
      const filtered = courses.filter((course) => {
        return (
          (filter.price === "" || course.price <= parseInt(filter.price)) &&
          (filter.duration === "" || course.duration === filter.duration) &&
          (filter.level === "" || course.level === filter.level)
        );
      });
      // Actualizar el estado con los cursos filtrados
      setFilteredCourses(filtered);
    }
  }, [filter, courses]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="bg-indigo-400">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-5">
              <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                      <span className="relative inline-block">
                        <svg
                          viewBox="0 0 52 24"
                          fill="currentColor"
                          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                          <defs>
                            <pattern
                              id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                              x="0"
                              y="0"
                              width=".135"
                              height=".30"
                            >
                              <circle cx="1" cy="1" r=".7" />
                            </pattern>
                          </defs>
                          <rect
                            fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                            width="52"
                            height="24"
                          />
                        </svg>
                        <span className="relative">The</span>
                      </span>{" "}
                      quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className="text-base text-indigo-100 md:text-lg">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque rem aperiam, eaque ipsa
                      quae.
                    </p>
                  </div>
                  <a
                    href="/"
                    aria-label="Scroll down"
                    className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 relative items-center flex ">
            <div className="container px-6 mx-auto">
              <div className="mx-auto">
                <div className="mt-6 md:flex md:items-center md:justify-between">
                  <div>
                    <h1 className="text-4xl text-center md:text-left  font-semibold text-gray-800 lg:text-3xl dark:text-white">
                      Cursos o clases unicas
                    </h1>
                  </div>
                </div>
                <hr className="my-8 border-gray-200 dark:border-gray-700" />
              </div>
              {courses.length > 1 && (
                <Filters filter={filter} onFilterChange={handleFilterChange} />
              )}
              <div className="">
                <div className="mt-5">
                  {loading ? (
                    <Loading number={filteredCourses.length} />
                  ) : courses.length > 0 ? (
                    <div className="flex flex-col ">
                      {/* <Filters filter={filter} onFilterChange={handleFilterChange} /> */}
                      {/* <Categories /> */}
                      {/* Mostrar mensaje si no hay cursos filtrados */}
                      {filteredCourses.length === 0 && (
                        <div className=" text-red-500 text-xl mt-7">
                          No se encuentra un curso con estas especificaciones.
                        </div>
                      )}

                      {/* Mostrar los cursos filtrados */}
                      {filteredCourses.length > 0 && (
                        <Cards courses={filteredCourses} />
                      )}
                      <Testimonials />
                      {courses.length > initialCourses.length && (
                        <button
                          onClick={handleShowMore}
                          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          {showMore ? "Show Less" : "Show More"}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div>Not found</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
