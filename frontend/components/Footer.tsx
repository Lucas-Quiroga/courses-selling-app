import React from "react";
import Modal from "./Modal2";

const Footer = () => {
  return (
    <footer className="bg-white  border-t-2 border-gray-200 ">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 ">
          <Modal />
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400 ">
          © 2023 Quiroga lucas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
