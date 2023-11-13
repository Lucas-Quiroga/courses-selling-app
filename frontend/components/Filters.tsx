import React from "react";

const Filters = () => {
  return (
    <div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-white">
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
          Reset Filter
        </button>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Todo</option>
            <option value="for-rent">Más populares</option>
            <option value="for-sale">Más vendidos</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Precio</option>
            <option value="fully-furnished">Hasta $50.000</option>
            <option value="partially-furnished">Hasta $100.000</option>
            <option value="not-furnished">Hasta $150.000</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Duración</option>
            <option value="Corto">Corto</option>
            <option value="Medio">Medio</option>
            <option value="Largo">Largo</option>
          </select>

          <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Nivel</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
