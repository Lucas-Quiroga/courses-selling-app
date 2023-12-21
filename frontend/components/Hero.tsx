"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/coreComponents/Loading";
import { getCourses } from "@/coreComponents/helper/apiCalls";
import { Cards, Filters } from "@/components";
import { CourseType1 as Course } from "@/types/index";
import { Categories } from "@/components";

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
        const coursesData = await getCourses();
        setCourses(coursesData);
        setLoading(false);
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
    <div className="mt-5">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Explorá las clases unicas que ofrece{" "}
            <span className="underline decoration-blue-500">Paula</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <Filters filter={filter} onFilterChange={handleFilterChange} />
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
  );
};

export default Hero;
