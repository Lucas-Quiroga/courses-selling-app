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

interface CardDetailsProps {
  course: {
    _id: number;
    name: string;
    description: string;
    price: number;
    thumbnail: string;
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

  useEffect(() => {
    const checkAuth = () => setIsAuth(isAuthenticated());
    checkAuth(); // Verifica la autenticación inmediatamente

    const intervalId = setInterval(checkAuth, 1000); // Verifica la autenticación cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={course.thumbnail}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CURSO
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {course.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Clases</span>
                </span>
              </div>
              <p className="leading-relaxed">{course.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {" "}
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${course.price}
                </span>
              </div>

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
      </section>
    </>
  );
};

export default CardDetails;
