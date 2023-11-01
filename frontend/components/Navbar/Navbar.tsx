"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/coreComponents/helper/auth";

const Navbar = () => {
  const { toggleForm, toggleModal, active, setActive } = useAuth();

  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const Logout = () => {
    localStorage.clear();
    router.refresh();
  };

  useEffect(() => {
    const checkAuth = () => setIsAuth(isAuthenticated());
    checkAuth(); // Verifica la autenticación inmediatamente
    const id = setInterval(checkAuth, 1000); // Verifica la autenticación cada segundo

    return () => clearInterval(id); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  if (!isAuth) {
    return null;
  }
  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="/"
          >
            Curso tarot
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <li>
              <Link
                href="/"
                className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Courses"
                className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              >
                Services
              </Link>
            </li>
            {!isAuth ? (
              <li>
                <Link
                  href="/user/signin"
                  className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  aria-current="page"
                  onClick={() => {
                    router.push("/");
                    router.refresh();
                    Logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
