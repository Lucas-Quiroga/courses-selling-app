import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="hero">
        <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
          <h1 className="font-bold text-3xl text-gray-900">
            Stunning free images & royalty free stock
          </h1>
          <p className="font-base text-base text-gray-600">
            High quality stock images and videos shared by our talented
            community.
          </p>
        </div>

        <div className="box pt-6">
          <div className="box-wrapper">
            <div className="bg-white rounded flex items-center justify-center mx-auto sm:w-full md:w-[50%] p-3 shadow-sm border border-gray-200">
              <button className="outline-none focus:outline-none">
                <svg
                  className="w-5 text-gray-600 h-5 cursor-pointer"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="search for images"
                x-model="q"
                className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
              />
              <div className="select">
                <select
                  name=""
                  id=""
                  x-model="image_type"
                  className="text-sm outline-none focus:outline-none bg-transparent"
                >
                  <option value="all" selected>
                    All
                  </option>
                  <option value="photo">Photo</option>
                  <option value="illustration">Illustration</option>
                  <option value="vector">Vector</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
