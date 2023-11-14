"use client";
import React from "react";
import { deleteCourse } from "@/coreComponents/helper/course";
import CustomButton from "@/coreComponents/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

type CardsCourseProps = {
  course: {
    image: string;
    name: string;
    description: string;
    price: number;
    _id: number;
    duration: string | number;
    level: string;
  };
};

const CardsCourse = ({ course }: CardsCourseProps) => {
  const router = useRouter();
  return (
    <>
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

          <CustomButton
            title="Borrar"
            btnType="button"
            handleClick={() => {
              deleteCourse(course._id);
              router.refresh();
            }}
            containerStyles="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          />
        </div>
      </div>
    </>
  );
};

export default CardsCourse;
