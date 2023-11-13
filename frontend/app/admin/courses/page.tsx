import React from "react";
import Link from "next/link";
import { getCourses } from "@/coreComponents/helper/apiCalls";

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
              <div>
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={
                    course.image ||
                    "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  }
                  alt=""
                />

                <div className="mt-8">
                  <span className="text-blue-500 uppercase">
                    category {course.level || ""}
                  </span>

                  <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                    {course.name}
                  </h1>

                  <p className="mt-2 text-gray-500 ">{course.description}</p>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <a
                        href="#"
                        className="text-lg font-medium text-gray-700 hover:underline hover:text-gray-500"
                      >
                        John snow
                      </a>

                      <p className="text-sm text-gray-500 ">February 1, 2022</p>
                    </div>

                    <a
                      href="#"
                      className="inline-block text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link href={`/admin/courses/edit/${course._id}`}>
                    <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      Editar
                    </button>
                  </Link>
                  <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Borrar
                  </button>
                </div>
              </div>
            ))}

            {/* <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-8">
                <span className="text-blue-500 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                  All the features you want to know
                </h1>

                <p className="mt-2 text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700  hover:underline hover:text-gray-500"
                    >
                      Arthur Melo
                    </a>

                    <p className="text-sm text-gray-500 ">February 6, 2022</p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />

              <div className="mt-8">
                <span className="text-blue-500 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                  Which services you get from Meraki UI
                </h1>

                <p className="mt-2 text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700  hover:underline hover:text-gray-500"
                    >
                      Tom Hank
                    </a>

                    <p className="text-sm text-gray-500">February 19, 2022</p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
