"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SiMercadopago } from "react-icons/si";
import mercadoPagoIcon from "@/public/mercadopago.png";
import { PurchaseProcessInformation } from ".";
import Modal from "./Modal";

const CheckOut = () => {
  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const [toggleModal, setToggleModal] = useState(false);

  const changeText = (e: any) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  const router = useRouter();

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          {/* <button
            onClick={handleToggleModal}
            className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <svg
              className="w-5 h-5 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mx-1">Más información</span>
          </button> */}
          <Modal />
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:w-full">
              <div className="py-14 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                        Customer’s Cart
                      </p>
                      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                        <div className="pb-4 md:pb-8 w-full md:w-40">
                          <img
                            className="w-full hidden md:block"
                            src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                            alt="dress"
                          />
                          <img
                            className="w-full md:hidden"
                            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                            alt="dress"
                          />
                        </div>
                        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                          <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                              Premium Quaility Dress
                            </h3>
                            <div className="flex justify-start items-start flex-col space-y-2">
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">Style: </span>{" "}
                                Italic Minimal Design
                              </p>
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">Size: </span>{" "}
                                Small
                              </p>
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">Color: </span>{" "}
                                Light Blue
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between space-x-8 items-start w-full">
                            <p className="text-base xl:text-lg leading-6">
                              $36.00{" "}
                              <span className="text-red-300 line-through">
                                {" "}
                                $45.00
                              </span>
                            </p>
                            <p className="text-base xl:text-lg leading-6 text-gray-800">
                              01
                            </p>
                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                              $36.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                        <div className="w-full md:w-40">
                          <img
                            className="w-full hidden md:block"
                            src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                            alt="dress"
                          />
                          <img
                            className="w-full md:hidden"
                            src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
                            alt="dress"
                          />
                        </div>
                        <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                          <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                              High Quaility Italic Dress
                            </h3>
                            <div className="flex justify-start items-start flex-col space-y-2">
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">Style: </span>{" "}
                                Italic Minimal Design
                              </p>
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">Size: </span>{" "}
                                Small
                              </p>
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">Color: </span>{" "}
                                Light Blue
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between space-x-8 items-start w-full">
                            <p className="text-base xl:text-lg leading-6">
                              $20.00{" "}
                              <span className="text-red-300 line-through">
                                {" "}
                                $30.00
                              </span>
                            </p>
                            <p className="text-base xl:text-lg leading-6 text-gray-800">
                              01
                            </p>
                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                              $20.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                        <h3 className="text-xl font-semibold leading-5 text-gray-800">
                          Summary
                        </h3>
                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                          <div className="flex justify-between  w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Subtotal
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              $56.00
                            </p>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Discount{" "}
                              <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                                STUDENT
                              </span>
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              -$28.00 (50%)
                            </p>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Shipping
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              $8.00
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base font-semibold leading-4 text-gray-800">
                            Total
                          </p>
                          <p className="text-base font-semibold leading-4 text-gray-600">
                            $36.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-100 flex flex-col justify-between lg:w-full xl:w-3/5">
              <p>
                Introduce los datos necesarios para mantenerte informado sobre
                el estado de tu pedido y para facilitar el contacto en caso
                necesario.
              </p>

              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                  or pay with card
                </p>
                <hr className="border w-full" />
              </div>

              <div className="mt-8">
                <label className="w-full text-base leading-4 placeholder-gray-600 text-gray-600">
                  Ingrese su nombre
                </label>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="Nombre"
                />

                <label className="w-full text-base leading-4 placeholder-gray-600 text-gray-600">
                  Ingrese su apellido
                </label>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="Apellido"
                />
              </div>

              <div className="mt-8">
                <label className="w-full text-base leading-4 placeholder-gray-600 text-gray-600">
                  {" "}
                  Ingrese su email
                </label>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="mt-8">
                <label className="w-full text-base leading-4 placeholder-gray-600 text-gray-600">
                  Ingrese su número de teléfono
                </label>
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="tel" // Cambiado el tipo de input a 'tel'
                  placeholder="Número de teléfono"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Patrón para el formato XXX-XXX-XXXX
                  required
                />
                <p className="mt-2 text-xs text-gray-500">
                  Formato: XXX-XXX-XXXX
                </p>
              </div>

              <button className="mt-8 border border-transparent hover:border-gray-300 bg-blue-500 hover:bg-blue-700 text-white hover:text-white flex justify-center items-center py-4 rounded w-full">
                Ir a pagar
                <img
                  src={mercadoPagoIcon.src}
                  alt="iconmp"
                  className="ml-2 h-8 w-8"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
