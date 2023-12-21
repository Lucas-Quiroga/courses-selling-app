"use client";

import React from "react";
import { IoReload } from "react-icons/io5";

const Filters = ({ filter, onFilterChange }: any) => {
  // Manejar cambios en el precio
  const handlePriceChange = (event: any) => {
    onFilterChange({ ...filter, price: event.target.value });
  };

  // Manejar cambios en la duración
  const handleDurationChange = (event: any) => {
    onFilterChange({ ...filter, duration: event.target.value });
  };

  // Manejar cambios en el nivel
  const handleLevelChange = (event: any) => {
    onFilterChange({ ...filter, level: event.target.value });
  };

  // Restablecer todos los filtros a sus valores predeterminados
  const handleResetFilters = () => {
    onFilterChange({ price: "", duration: "", level: "" });
  };

  return (
    <div className="">
      {/* <div className="flex items-center justify-between mt-4">
        <p className="font-medium text-white dark:text-gray-950">Filtros</p>

        <button
          onClick={handleResetFilters}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
        >
          Reiniciar filtros
        </button>
      </div> */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {/* <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Todo</option>
            <option value="Populares">Más populares</option>
            <option value="Vendidos">Más vendidos</option>
          </select> */}

        <select
          value={filter.price}
          onChange={handlePriceChange}
          className="px-4 py-3 w-full rounded-md  bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm  cursor-pointer"
        >
          <option value="">Precio</option>
          <option value="50000">Hasta $50.000</option>
          <option value="100000">Hasta $100.000</option>
          <option value="150000">Hasta $150.000</option>
        </select>

        {/* <select
          value={filter.duration}
          onChange={handleDurationChange}
          className="px-4 py-3 w-full rounded-md  bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm cursor-pointer"
        >
          <option value="">Duración</option>
          <option value="Corto">Corto</option>
          <option value="Medio">Medio</option>
          <option value="Largo">Largo</option>
        </select> */}

        <select
          value={filter.level}
          onChange={handleLevelChange}
          className="px-4 py-3 w-full rounded-md  bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm cursor-pointer"
        >
          <option value="">Nivel</option>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>

        <button
          onClick={handleResetFilters}
          className="px-4 py-3 w-full rounded-md  bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm cursor-pointer items-center flex mx-auto justify-center"
        >
          <IoReload className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Filters;
