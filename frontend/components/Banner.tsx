import React from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-indigo-100 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <Marquee>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Cursos con Paula</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Descubre los cursos más emocionantes y sumérgete en oportunidades
            únicas. ¡No te pierdas lo que viene a continuación en el mundo del
            conocimiento!
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
