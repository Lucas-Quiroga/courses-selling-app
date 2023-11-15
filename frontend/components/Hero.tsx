"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/coreComponents/Loading";
import { getCourses } from "@/coreComponents/helper/apiCalls";
import { Cards, Filters } from "@/components";
// import axios from "axios";

type Course = {
  _id: string;
  name: string;
  description: string;
  price: number;
  modules: any[]; // Tipo real de modules puede ser diferente, ajusta según sea necesario
  thumbnail: string;
  duration: string;
  level: string;
  __v: number;
};

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

  // Manejar cambios en los filtros y actualizar los cursos filtrados
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
    getCourses()
      .then((res) => {
        setCourses(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <div className="mt-5">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full px-4">
          <div className="pt-32 sm:pt-0">
            <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-3xl ">
              Tu lugar donde <span className="text-indigo-600 ">aprender</span>{" "}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Descubre el fascinante mundo del tarot con los cursos de Paula
              Domínguez. Nuestros cursos te brindarán un profundo conocimiento
              del tarot y te guiarán en tu viaje espiritual. Aprende a
              interpretar las cartas y descubre sus misterios en un ambiente de
              aprendizaje enriquecedor.
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                className="text-blueGray-600"
                target="_blank"
              >
                ¡Explora nuestros cursos ahora!
              </a>
              It features multiple HTML elements and it comes with dynamic
              components for ReactJS, Vue and Angular.
            </p>
          </div>
        </div>
      </div>
      {loading ? (
        <Loading number={1} />
      ) : courses.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <Filters filter={filter} onFilterChange={handleFilterChange} />
          <Cards
            courses={
              !showMore
                ? filteredCourses
                : initialCourses.slice(0, showMore ? filteredCourses.length : 5)
            }
          />
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
