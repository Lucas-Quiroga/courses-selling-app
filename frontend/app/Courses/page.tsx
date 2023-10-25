"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/coreComponents/Loading";
import { getCourses } from "@/coreComponents/helper/apiCalls";
import { Cards } from "@/components";

type Course = {
  image: string;
  name: string;
  description: string;
  price: number;
  id: number;
};

const Page = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); //indicador de carga.

  useEffect(() => {
    getCourses()
      .then((res) => {
        setCourses(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error); // Imprime el error para depuración.
      });
  }, []);

  return (
    <div className="mt-5">
      {loading ? (
        <Loading number={3} />
      ) : courses.length > 0 ? (
        // Renderiza tus cursos aquí.
        courses.map((course: Course, index) => (
          <Cards
            key={index}
            image={course.image}
            name={course.name}
            description={course.description}
            price={course.price}
            id={course.id}
          />
        ))
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
};

export default Page;
