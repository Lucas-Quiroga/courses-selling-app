import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-gray-600">
              Cursos de Tarot con Paula Domínguez
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Descubre el fascinante mundo del tarot con los cursos de Paula
              Domínguez. Nuestros cursos te brindarán un profundo conocimiento
              del tarot y te guiarán en tu viaje espiritual. Aprende a
              interpretar las cartas y descubre sus misterios en un ambiente de
              aprendizaje enriquecedor.
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                className="text-blueGray-600"
                target="_blank"
              >
                ¡Explora nuestros cursos ahora!
              </a>
              It features multiple HTML elements and it comes with dynamic
              components for ReactJS, Vue and Angular.
            </p>
            <div className="mt-12">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/creativetimofficial/notus-js?ref=njs-index"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-700 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                target="_blank"
              >
                Github Star
              </a>
            </div>
          </div>
        </div>
      </div>

      <Image
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        src="/hero.png"
        alt="..."
        height={1437}
        width={1440}
      />
    </section>
  );
};

export default Hero;
