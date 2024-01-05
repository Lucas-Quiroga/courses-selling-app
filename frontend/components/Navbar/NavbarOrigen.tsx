"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import ThemeContext, { ThemeProvider } from "@/context/ThemeContext";
import SearchNavBar from "../SearchNavBar";
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
    <div className="relative bg-white dark:bg-slate-900 ml-56">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex flex-row-reverse items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          {/* <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div> */}
          {/* <div className="-mr-2 -my-2 md:hidden">
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
          </div> */}

          {/* {isMenuOpen && <OffCanvas />} */}

          {/* <label className="ui-switch mt-1">
              <input type="checkbox" onClick={toggleTheme} />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label> */}

          <div className="container flex justify-end">
            <label className="toggle" htmlFor="switch">
              <input
                id="switch"
                className="input"
                type="checkbox"
                onClick={toggleTheme}
              />
              <div className="icon icon--moon">
                <svg
                  height="20"
                  width="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>

              <div className="icon icon--sun">
                <svg
                  height="20"
                  width="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
              </div>
            </label>
          </div>
          {/* <SearchNavBar /> */}
        </div>
      </div>
    </div>
  );
};

export default NavbarOrigen;
