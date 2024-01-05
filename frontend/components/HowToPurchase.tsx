import React from "react";

const HowToPurchase = () => {
  return (
    <div>
      <div className="bg-indigo-400">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-5">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  <span className="relative inline-block"></span> Información
                  acerca del proceso de compra
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
              <span className="text-base font-bold leading-7">1</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
                <span className="text-indigo-600 "> Paso 1:</span> Realizar el
                pago
              </h3>

              <p className="text-base font-medium leading-7 text-dark-grey-600 break-words">
                “Después de realizar el pago, recibirá un código único. Este
                código sirve como comprobante de transacción y será necesario
                para consultas o solicitudes relacionadas con la compra. También
                se utiliza para generar un PDF personalizado con detalles
                adicionales sobre la compra.”.
              </p>
            </div>
          </div>
          <div className="rotate-90 lg:rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clip-path="url(#clip0_3346_6663)">
                <path
                  d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                  fill="#68769F"
                />
              </g>
              <defs>
                <clipPath id="clip0_3346_6663">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
              <span className="text-base font-bold leading-7">2</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
                <span className="text-indigo-600 "> Paso 2:</span>
                Confirmación de pago
              </h3>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                “Nuestro equipo se pondrá en contacto en 12 a 24 horas después
                de realizar el pago. Se procesará la transacción y se
                proporcionarán detalles adicionales sobre la compra. Estos
                detalles incluirán cómo acceder al contenido del curso y otros
                beneficios asociados.”.
              </p>
            </div>
          </div>
          <div className="rotate-90 lg:rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clip-path="url(#clip0_3346_6663)">
                <path
                  d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                  fill="#68769F"
                />
              </g>
              <defs>
                <clipPath id="clip0_3346_6663">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
              <span className="text-base font-bold leading-7">3</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
                <span className="text-indigo-600 ">Paso 3:</span> Acceso al
                curso
              </h3>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                “Una vez confirmado el pago, se habilitará el acceso al curso a
                través de Google Drive en 12 a 24 horas. Se enviarán
                instrucciones detalladas y recursos adicionales para aprovechar
                al máximo la experiencia de aprendizaje. Si surge alguna
                pregunta o se necesita asistencia, el equipo está disponible
                para ayudar en el viaje educativo”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPurchase;
