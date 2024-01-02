import React from "react";
import Services from "@/json/Services.json";

const Servicios = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Paula también brinda los siguientes servicios:
          </h1>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {Services.map((e) => (
            <div>
              <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src={e.img}
                alt=""
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  {e.name}
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  {e.information}
                </p>

                <p className="mt-3 text-sm text-blue-500">{e.modality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
