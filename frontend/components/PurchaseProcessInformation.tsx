import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaGoogleDrive } from "react-icons/fa";

const PurchaseProcessInformation = ({ onClose }: any) => {
  return (
    <section className="bg-white  rounded-xl">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
              Información sobre el proceso de pago
            </h1>

            <div className="flex mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <div className="flex justify-between mt-8 md:mt-0">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
              data-modal-hide="static-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col justify-between p-8 border rounded-lg hover:bg-blue-500 hover:text-white">
            <h3 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
              <span className="text-indigo-600 "> Paso 1:</span> Realizar el
              pago
            </h3>
            <p className="leading-loose text-gray-500 hover:text-white mt-5  ">
              “Después de realizar el pago, recibirá un código único. Este
              código le servirá como comprobante de su transacción. Guárdelo de
              manera segura, ya que será necesario para cualquier consulta o
              solicitud relacionada con su compra. Además, este código se
              utilizará para generar un PDF personalizado que contendrá detalles
              adicionales sobre su compra y las próximas acciones a seguir.”.
            </p>

            <div className="flex items-center justify-center mt-8 ">
              <FaRegCheckCircle size={80} className=" text-green-500" />
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 border rounded-lg hover:bg-blue-500">
            <h3 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
              <span className="text-indigo-600 "> Paso 2:</span>
              Confirmación de pago
            </h3>
            <p className="leading-loose text-gray-500 hover:text-white mt-5">
              “Después de realizar el pago, nuestro equipo se pondrá en contacto
              con usted en un plazo de 12 a 24 horas. Durante este tiempo,
              procesaremos su transacción y le proporcionaremos detalles
              adicionales sobre su compra. Estos detalles podrían incluir
              información sobre cómo acceder al contenido del curso, así como
              cualquier otro beneficio adicional asociado con su compra.
              Agradecemos su paciencia y estamos aquí para ayudarle en caso de
              alguna pregunta o inquietud..”.
            </p>

            <div className="flex items-center justify-center mt-8 ">
              <IoIosTimer size={80} className=" text-blue-500 " />
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 border rounded-lg hover:bg-blue-500 ">
            <h3 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
              <span className="text-indigo-600 ">Paso 3:</span> Acceso al curso
            </h3>
            <p className="leading-loose text-gray-500 hover:text-white mt-5">
              “Además, le informamos que, una vez que su pago sea confirmado, le
              habilitaremos el acceso al curso a través de Google Drive. Este
              proceso también se llevará a cabo en un plazo de 12 a 24 horas. Le
              enviaremos las instrucciones detalladas junto con cualquier otro
              recurso que pueda necesitar para sacar el máximo provecho de su
              experiencia de aprendizaje. Si tiene alguna pregunta o necesita
              asistencia, no dude en ponerse en contacto con nosotros. ¡Estamos
              aquí para ayudarle en su viaje educativo!”.
            </p>

            <div className="flex items-center justify-center mt-8">
              <FaGoogleDrive size={80} className=" text-yellow-500" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PurchaseProcessInformation;
