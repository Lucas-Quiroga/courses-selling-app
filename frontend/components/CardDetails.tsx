"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs } from ".";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { addToCart } from "@/coreComponents/helper/cart";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { isAuthenticated } from "@/coreComponents/helper/auth";
import CustomButton from "@/coreComponents/CustomButton";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";

interface CardDetailsProps {
  course: {
    _id: number;
    name: string;
    description: string;
    price: number;
    thumbnail: string;
    duration: string;
    level: string;
  };
}

const CardDetails = ({ course }: CardDetailsProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession();

  const { dispatch } = useCart();

  // const handleBuyClick = () => {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: course,
  //   });
  //   router.push("/cart/checkout");
  // };

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

  const newhandleBuyClick = () => {
    router.push("/checkout");
  };

  const handleBuyClick = async (_id: number) => {
    try {
      if (!(session?.user || isAuth)) {
        // Si el usuario no está autenticado, redirige a la página de inicio de sesión
        router.push("/user/signin");
        return;
      }
      // Llamada a la función addToCart del cliente
      const cartData = await addToCart(course._id);
      console.log("Curso agregado al carrito:", cartData);

      // Redirigir o realizar otras acciones según sea necesario
      router.push("/cart/checkout");
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      // Manejar el error según sea necesario
    }
  };

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(course.price);

  useEffect(() => {
    const checkAuth = () => setIsAuth(isAuthenticated());
    checkAuth(); // Verifica la autenticación inmediatamente

    const intervalId = setInterval(checkAuth, 1000); // Verifica la autenticación cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center  rounded border border-gray-200 py-7 sm:py-0 xl:w-full">
                <div className="py-14 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                      <div className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <img
                          alt="ecommerce"
                          className="h-full w-full object-cover object-center round"
                          src={course.thumbnail}
                        />{" "}
                      </div>
                      {/* HASTA ACA */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded border border-gray-200 flex flex-col justify-between ">
                <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      CURSO
                    </h2>
                    <h1 className="text-gray-900 uppercase text-3xl title-font font-medium mb-1">
                      {course.name}
                    </h1>
                    <div className="flex">
                      <span className="flex items-center">
                        {generateRating(4)}
                        {/* <span className="text-gray-600 ml-3">4 Clases</span> */}
                      </span>
                    </div>
                  </div>
                  {/* Descripción y detalles */}
                  {/* <p className="leading-relaxed">{course.description}</p> */}
                  <div className="lg:col-span-2 lg:col-start-1 lg:pr-8 lg:pt-6">
                    <div>
                      <h3 className="text-sm font-medium uppercase text-gray-900">
                        Descripción
                      </h3>

                      <div className="space-y-6">
                        <p className="text-base text-gray-900 mt-4">
                          El paquete de seis camisetas básicas te permite
                          expresar completamente tu personalidad vibrante con
                          tres opciones en escala de grises. ¿Te sientes
                          aventurero? Ponte una camiseta gris jaspeada. ¿Quieres
                          marcar tendencia? Prueba nuestro color exclusivo:
                          "Negro". ¿Necesitas agregar un toque extra de color a
                          tu atuendo? Nuestra camiseta blanca lo tiene cubierto.
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium uppercase text-gray-900">
                          Aspectos destacados
                        </h3>

                        <div className="mt-4">
                          <ul
                            role="list"
                            className="list-disc space-y-2 pl-4 text-md"
                          >
                            <li className="text-gray-400">
                              <span className="text-gray-600">
                                Cortado y cosido localmente a mano
                              </span>
                            </li>
                            <li className="text-gray-400">
                              <span className="text-gray-600">
                                Teñido con nuestros colores patentados
                              </span>
                            </li>
                            <li className="text-gray-400">
                              <span className="text-gray-600">
                                Prelavado y preencogido
                              </span>
                            </li>
                            <li className="text-gray-400">
                              <span className="text-gray-600">
                                Ultra suave 100% algodón
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium uppercase text-gray-900">
                          Información del Curso
                        </h3>

                        <div className="mt-4">
                          <ul className="space-y-2 text-md">
                            <li className="text-gray-400">
                              <div className="flex items-center">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-indigo-600 mb-1.5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </span>
                                <p className="text-md text-gray-600">
                                  Duración del curso: <b> {course.duration} </b>
                                </p>
                              </div>
                            </li>
                            <li className="text-gray-400">
                              <div className="flex items-center">
                                <MdOndemandVideo className="h-6 w-6 text-indigo-600 mb-1.5 mr-1" />
                                <p className="text-md text-gray-600">
                                  Cantidad de videos: <b>3</b>
                                </p>
                              </div>
                            </li>
                            <li className="text-gray-400">
                              <div className="flex items-center">
                                <span>
                                  <svg
                                    className="h-6 w-6 text-indigo-600 mb-1.5 mr-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#741f7a"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />

                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <path
                                        d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z"
                                        stroke="#4f46e5"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />{" "}
                                      <path
                                        d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
                                        stroke="#4f46e5"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />{" "}
                                      <path
                                        d="M21.4 15V9"
                                        stroke="#4f46e5"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />{" "}
                                    </g>
                                  </svg>
                                </span>
                                <p className="text-md text-gray-600">
                                  Nivel del curso: <b> {course.level}</b>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-sm font-medium uppercase text-gray-900">
                        Detalles
                      </h2>

                      <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">
                          El paquete de seis incluye dos camisetas negras, dos
                          blancas y dos grises jaspeadas Basic Tees. Regístrate
                          en nuestro servicio de suscripción y sé el primero en
                          obtener nuevos y emocionantes colores, como nuestro
                          próximo lanzamiento limitado "Gris Carbón".
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 justify-between">
                      {" "}
                      <span className="title-font font-medium text-2xl text-gray-900">
                        {formattedPrice} ARS
                      </span>
                      <div className="flex justify-between">
                        <CustomButton
                          title="Comprar"
                          containerStyles="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          handleClick={() =>
                            router.push(`/Courses/${course._id}/checkout`)
                          }
                        />

                        <CustomButton
                          title="Ver introduccion"
                          containerStyles="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          handleClick={() =>
                            router.push(`/Courses/${course._id}/lessons`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
