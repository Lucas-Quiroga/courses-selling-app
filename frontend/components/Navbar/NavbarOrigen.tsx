"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeProvider } from "@/context/ThemeContext";
import { OffCanvas } from "..";

const NavbarOrigen = () => {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = contextValue;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {isMenuOpen && <OffCanvas />}

          <nav className="hidden md:flex space-x-10">
            <label className="ui-switch mt-1">
              <input type="checkbox" onClick={toggleTheme} />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>

            <Link
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-50"
              aria-current="page"
            >
              Inicio
            </Link>

            <Link
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-50"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarOrigen;
