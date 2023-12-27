"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
// import { RadioButtons } from ".";
import { usePathname } from "next/navigation";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { CardsProps } from "@/types";
import { FaUserGraduate, FaLongArrowAltLeft } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

const Cards = ({ courses }: any) => {
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  courses.image = courses.image ? courses.image : "/cardimg.png";

  const pathname = usePathname();

  const router = useRouter();

  const generateRating = (rating: number) => {
    if (rating < 1 || rating > 5) {
      return null;
    }

    const stars = (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index}>
            {index < rating ? <AiFillStar /> : <AiOutlineStar />}
          </div>
        ))}
      </div>
    );

    return stars;
  };

  // Función para calcular el precio más caro
  const calculateOriginalPrice = (price: number): number => {
    // Puedes agregar lógica aquí para calcular el precio más caro, por ejemplo, sumar un porcentaje
    const originalPrice = price * 1.2; // Aumento del 20%
    return originalPrice;
  };

  // const showTooltip = (index: number) => {
  //   setTooltipIndex(index);
  // };

  // const hideTooltip = () => {
  //   setTooltipIndex(null);
  // };

  return (
    <div>
      <section className="flex flex-wrap w-fit justify-start gap-y-20 gap-x-14 mt-10 mb-5 sm:items-start sm:flex-wrap md:items-start xl:items-start">
        {courses.map((course: CardsProps, index: any) => {
          const formattedPrice = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(course.price);

          // Calcular el precio más caro
          const originalPrice = calculateOriginalPrice(course.price);
          const formattedOriginalPrice = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(originalPrice);

          return (
            <div
              key={index}
              className="flex justify-center items-center mx-auto sm:justify-start sm:items-start sm:mx-0"
            >
              {/* CARD NUEVA */}
              <div
                onClick={() =>
                  router.push(
                    `/Courses/${course._id}`,
                    {},
                    {
                      showProgressBar: true,
                    }
                  )
                }
                key={course._id}
              >
                <div className="group w-72 bg-white hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full duration-500 hover:scale-105 cursor-pointer">
                  <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                      fill
                      className="object-cover"
                      alt={course.name}
                      src={course.thumbnail}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-col pt-2">
                    <div className="text-3xl md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                      {course.name}
                    </div>
                    <p className="text-xs text-muted-foreground text-gray-400 uppercase dark:text-gray-200">
                      {course.format}
                    </p>

                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                      <div className="flex flex-col gap-x-1 text-slate-500">
                        <div className="flex space-x-1 items-center">
                          <MdOndemandVideo className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                          <p className="text-sm dark:text-white">
                            {course.videos} videos
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <FaGoogleDrive className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                          <p className="text-sm dark:text-white">
                            Google drive
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <FaUserGraduate className="h-5 w-5 text-indigo-600 mb-1.5 dark:text-white" />
                          <p className="text-sm dark:text-white">
                            {course.level}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between ">
                      <p className="text-md md:text-sm font-medium text-slate-700">
                        {formattedPrice} ARS
                      </p>
                      {/* <div className="ml-8">
                        <FaLongArrowAltLeft
                          className="h-5 w-5"
                          color={"white"}
                        />
                      </div>
                      <del className="dark:text-gray-200">
                        <p className="text-md md:text-sm font-medium text-slate-700">
                          {formattedOriginalPrice}
                        </p>
                      </del> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Cards;
