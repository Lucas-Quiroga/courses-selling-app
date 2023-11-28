"use client";
import React from "react";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "dashboard", href: "dashboard" },
  { name: "analytics", href: "analytics" },
  { name: "courses", href: "courses" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavbarAdmin = () => {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="100%"
                    height="100%"
                    rx="16"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "border-slate-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    {/* <Image
                      className="h-8 w-8 rounded-full"
                      src={user?.image || 'https://avatar.vercel.sh/leerob'}
                      height={32}
                      width={32}
                      alt={`${user?.name || 'placeholder'} avatar`}
                    /> */}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                ></Transition>
              </Menu>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default NavbarAdmin;

//        {/* <div className="relative"> */}
{
  /* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */
}
{
  /* <button
                type="button"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span>Solutions</span>

                <svg
                  className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button> */
}

{
  /* <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Analytics
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Engagement
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Security
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Your customers&#039; data will be safe and secure.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Integrations
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Connect with third-party tools that you&#039;re
                          already using.
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Automations
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Build strategic funnels that will drive your customers
                          to convert
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
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
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="ml-3">Watch Demo</span>
                      </a>
                    </div>

                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                      >
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-gray-400"
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="ml-3">Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */
}
{
  /* </div> */
}
