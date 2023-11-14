import React from "react";
import Link from "next/link";
import { getCourses } from "@/coreComponents/helper/apiCalls";
import CardsCourse from "@/components/AdminComponents/CardsCourse";

type Course = {
  image: string;
  name: string;
  description: string;
  price: number;
  _id: number;
  duration: string | number;
  level: string;
};

const page = async () => {
  const courses = await getCourses();

  return (
    <div className="p-6">
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
              Todos los cursos{" "}
            </h1>

            <Link href="/admin/create">
              <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Crear curso
              </button>
            </Link>
          </div>

          <hr className="my-8 border-gray-200 " />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course: Course) => (
              <CardsCourse key={course._id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
