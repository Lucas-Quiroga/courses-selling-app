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
      {/* <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full px-4">
          <div className="pt-32 sm:pt-0">
            <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-gray-50">
              Tu lugar donde{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                aprender
              </span>{" "}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600  mx-auto text-center dark:text-gray-50">
              Descubre el fascinante mundo del tarot con los cursos de Paula
              Domínguez. Nuestros cursos te brindarán un profundo conocimiento
              del tarot y te guiarán en tu viaje espiritual. Aprende a
              interpretar las cartas y descubre sus misterios en un ambiente de
              aprendizaje enriquecedor.
            </p>
          </div>
        </div>
      </div> */}

      {loading ? (
        <Loading number={filteredCourses.length} />
      ) : courses.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <Filters filter={filter} onFilterChange={handleFilterChange} />
          <Categories />
          {/* Mostrar mensaje si no hay cursos filtrados */}
          {filteredCourses.length === 0 && (
            <div className=" text-red-500 text-xl mt-7">
              No se encuentra un curso con estas especificaciones.
            </div>
          )}

          {/* Mostrar los cursos filtrados */}
          {filteredCourses.length > 0 && <Cards courses={filteredCourses} />}

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
  );
};

export default Hero;
