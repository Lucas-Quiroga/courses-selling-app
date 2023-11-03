import React from "react";
import Image from "next/image";

const Teachers = () => {
  return (
    <section className="bg-white mt-10 relative items-center flex h-screen max-h-860-px">
      <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
              Our Team
            </h1>

            <p className="max-w-2xl mt-4 text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <Image
                className="object-cover rounded-xl aspect-square"
                src="/teacher1.png"
                alt="teacher1"
                width={880}
                height={880}
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                John Doe
              </h1>

              <p className="mt-2 text-gray-500 capitalize ">
                Full stack developer
              </p>
            </div>

            <div>
              <Image
                className="object-cover rounded-xl aspect-square"
                src="/teacher2.png"
                alt="teacher2"
                width={880}
                height={880}
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                Mia
              </h1>

              <p className="mt-2 text-gray-500 capitalize ">Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
