"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdHome, IoIosHelpCircle } from "react-icons/io";
import { MdEmail, MdQuestionAnswer } from "react-icons/md";
import { SiCodemagic } from "react-icons/si";
import { AiFillLike } from "react-icons/ai";
import Modal2 from "./Modal2";

const Aside = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed block  top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 "
        // style={{ display: "none" }}
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <h5
              id="drawer-navigation-label"
              className="text-base ml-3 font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              Menu
            </h5>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                aria-current="page"
              >
                <IoMdHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdEmail className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Contacto</span>
              </Link>
            </li>
            <li>
              <Link
                href="/orientation"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SiCodemagic className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Orientación</span>
              </Link>
            </li>

            <li>
              <Link
                href="/faqs"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdQuestionAnswer className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Preguntas Frecuentes</span>
              </Link>
            </li>
          </ul>
          <div className="space-y-2 font-medium">
            <button
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => setModalOpen(true)}
            >
              <IoIosHelpCircle className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Quiero un web asi</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default Aside;
