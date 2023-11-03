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
  _id: number;
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
        <Loading number={1} />
      ) : courses.length > 0 ? (
        <Cards courses={courses} />
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
};

export default Page;
