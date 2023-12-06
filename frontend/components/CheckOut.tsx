"use client";
import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { SiMercadopago } from "react-icons/si";
import mercadoPagoIcon from "@/public/mercadopago.png";
import { PurchaseProcessInformation } from ".";
import Modal from "./Modal";
import { getCart, createOrder } from "@/coreComponents/helper/cart";
import { useRouter } from "next/navigation";
import { getCourseDetail } from "@/coreComponents/helper/apiCalls";

// Define la interfaz Course
interface Course {
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  duration: string | number;
  videos: number;
  level: string;
  highlights: string[];
  details: string;
  format: string;
  // Agrega aquí cualquier otra propiedad que necesites de Course
}

// Define la interfaz CartItem
interface CartItem {
  _id: string;
  course: Course;
}

const CheckOut = ({ idCourse }: any) => {
  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [data, setData] = useState<Course | null>(null);

  const [toggleModal, setToggleModal] = useState(false);
  const fetchData = async () => {
    if (idCourse) {
      try {
        const course = await getCourseDetail(idCourse);
        const {
          name,
          description,
          price,
          thumbnail,
          duration,
          videos,
          level,
          highlights,
          format,
          details,
        } = course;
        setData({
          name,
          description,
          price,
          thumbnail,
          duration,
          videos,
          level,
          highlights,
          format,
          details,
        });
      } catch (error) {
        console.error("Error fetching course data:", error);
        // Manejar el error de alguna manera si es necesario
      }
    }
  };

  const changeText = (e: any) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  const router = useRouter();
  // const { id } = router.query;
  // console.log(id);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  const handleCheckout = async () => {
    try {
      // Obtén la información de los cursos desde el estado local
      const courses = cart.map((item) => item.course);

      // Crea la orden en MercadoPago
      const orderResponse = await createOrder(courses);

      // Verifica si la respuesta de MercadoPago tiene el campo 'init_point'
      if (orderResponse && orderResponse.init_point) {
        // Redirige al usuario al init_point de MercadoPago
        window.location.href = orderResponse.init_point;
      } else {
        // Maneja el caso en que no se proporciona el init_point
        console.error(
          "No se proporcionó el init_point en la respuesta de MercadoPago"
        );
        // Puedes mostrar un mensaje de error o redirigir a una página de error
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      // Manejar el error según sea necesario
    }
  };

  useEffect(() => {
    if (idCourse) {
      fetchData();
    }
  }, []);

  // Función para calcular el precio más caro con un incremento del 20%
  const calculateOriginalPrice = (price: number): number => {
    const originalPrice = price * 1.2; // Aumento del 20%
    return originalPrice;
  };

  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(data?.price ?? 0); // Proporciona 0 como valor predeterminado si data?.price es undefined

  // Calcular el precio más caro
  const originalPrice = calculateOriginalPrice(data?.price ?? 0); // Proporciona 0 como valor predeterminado si data?.price es undefined
  const formattedOriginalPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(originalPrice);

  const resta: number = (data?.price ?? 0) - (originalPrice ?? 0);

  // Calcular el porcentaje de la resta
  const porcentajeDeLaResta: number =
    originalPrice !== 0 ? (Math.abs(resta) / originalPrice) * 100 : 0;

  const formattedResta = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(resta);

  const formattedPorcentajeDeLaResta = porcentajeDeLaResta.toFixed(2);

  const cargoServicioWeb = 5000; // Cambiado a $5000

  const formattedPrecioConRecargoWeb = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cargoServicioWeb);

  // Verificar si data está definido y tiene la propiedad price
  const precioOriginal = data?.price ?? 0;

  // Calcular el precio con descuento y agregar el cargo del servicio web
  const precioConDescuentoYCargo = precioOriginal + cargoServicioWeb;

  // Calcular el total sumando el precio con descuento y el cargo del servicio web
  const total = precioConDescuentoYCargo;

  // Formatear el total en moneda argentina
  const formattedTotal = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(total);

  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <Modal />
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:w-full">
              <div className="py-14 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                        Orden de compra # {Math.random()}
                      </p>

                      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                        <div className="pb-4 md:pb-8 w-full md:w-40">
                          <img
                            className="w-full hidden md:block"
                            src={data?.thumbnail}
                            alt="producto"
                          />
                        </div>
                        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                          <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                              {data?.name}
                            </h3>
                            <div className="flex justify-start items-start flex-col space-y-2">
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">
                                  Duración del curso:{" "}
                                </span>{" "}
                                {data?.duration}
                              </p>
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">
                                  Cantidad de videos:{" "}
                                </span>{" "}
                                {data?.videos}
                              </p>
                              <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-300">
                                  Nivel del curso:{" "}
                                </span>{" "}
                                {data?.level}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between space-x-8 items-start w-full">
                            <p className="text-base xl:text-lg leading-6">
                              {formattedPrice}{" "}
                            </p>
                            <span className="text-red-300 line-through">
                              {" "}
                              {formattedOriginalPrice}
                            </span>{" "}
                            ARS
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                        <h3 className="text-xl font-semibold leading-5 text-gray-800">
                          Resumen
                        </h3>
                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                          <div className="flex justify-between  w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Producto
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              {formattedOriginalPrice} ARS
                            </p>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Descuento{" "}
                              <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                                ACTIVO
                              </span>
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              {formattedResta} ({formattedPorcentajeDeLaResta}%)
                              ARS
                            </p>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Cargo servicio web
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              {formattedPrecioConRecargoWeb}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base font-semibold leading-4 text-gray-800">
                            Total
                          </p>
                          <p className="text-base font-semibold leading-4 text-gray-600">
                            {formattedTotal}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* hasta aqui */}
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
