import React from "react";
import Image from "next/image";

const SectionCoursesAll = () => {
  return (
    <>
      <div className="justify-center text-center flex flex-wrap mb-32 mt-32">
        <div className="w-full md:w-6/12 px-12 md:px-4">
          <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Notus Tailwind JS is a completly new product built using our past
            experience in web templates. Take the examples we made for you and
            start playing with them.
          </p>
        </div>
      </div>
      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <a href="./pages/auth/login.html">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Image
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/login.jpg"
                        height={800}
                        width={600}
                      />
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <a href="./pages/profile.html">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Image
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/profile.jpg"
                        height={800}
                        width={600}
                      />
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <a href="./pages/landing.html">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Image
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/landing.jpg"
                        height={800}
                        width={600}
                      />
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <a href="./pages/auth/login.html">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Image
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/login.jpg"
                        height={800}
                        width={600}
                      />
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <a href="./pages/profile.html">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Image
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/profile.jpg"
                        height={800}
                        width={600}
                      />
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <a href="./pages/landing.html">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Image
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/landing.jpg"
                        height={800}
                        width={600}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCoursesAll;
